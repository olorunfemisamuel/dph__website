from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
import logging
from contextlib import asynccontextmanager

from app.core.config import settings
from app.db.mongodb import connect_to_mongo, close_mongo_connection, check_connection_health
from app.routers import auth, users, chat, newsletter
from app.routers.contact import router as contact_router
from app.routers.consultation import router as consultation_router
from app.routers.admin import router as admin_router
from app.websockets.chat_ws import router as ws_router

# Configure logging
logging.basicConfig(
    level=logging.INFO if settings.DEBUG else logging.WARNING,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Manage application lifecycle with improved context manager
    This replaces the deprecated @app.on_event decorators
    """
    # Startup
    logger.info("🚀 Starting up application...")
    logger.info(f"⚙️  Environment: {settings.ENVIRONMENT}")
    logger.info(f"🔧 Debug mode: {settings.DEBUG}")

    try:
        await connect_to_mongo()
        logger.info("✅ Application startup complete")
        yield
    except Exception as e:
        logger.error(f"❌ Application startup failed: {e}")
        raise
    finally:
        # Shutdown
        logger.info("🛑 Shutting down application...")
        await close_mongo_connection()
        logger.info("✅ Application shutdown complete")


# Create FastAPI app with lifespan
app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
    description="DPH Website API with MongoDB, WebSockets, and AI features",
    docs_url="/api/docs" if settings.DEBUG else None,
    redoc_url="/api/redoc" if settings.DEBUG else None,
    openapi_url="/api/openapi.json" if settings.DEBUG else None,
    lifespan=lifespan,
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://dph-website-qeq8.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Exception handlers
@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    """Custom HTTP exception handler"""
    logger.warning(f"HTTP {exc.status_code}: {exc.detail}")
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail, "success": False},
    )


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    """Custom validation exception handler"""
    logger.warning(f"Validation error: {exc.errors()}")
    return JSONResponse(
        status_code=422,
        content={
            "detail": "Validation error",
            "errors": exc.errors(),
            "success": False,
        },
    )


@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    """Catch-all exception handler"""
    logger.error(f"Unhandled exception: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={
            "detail": "Internal server error",
            "message": str(exc) if settings.DEBUG else "An unexpected error occurred",
            "success": False,
        },
    )


# Include routers with proper prefixes
API_PREFIX = "/api/v1"

app.include_router(auth.router, prefix=f"{API_PREFIX}/auth", tags=["Authentication"])
app.include_router(users.router, prefix=f"{API_PREFIX}/users", tags=["Users"])
app.include_router(chat.router, prefix=f"{API_PREFIX}/chat", tags=["Chat"])
app.include_router(newsletter.router, prefix=f"{API_PREFIX}/newsletter", tags=["Newsletter"])
app.include_router(ws_router, prefix="/ws", tags=["WebSocket"])
app.include_router(contact_router, prefix="/api/v1")
app.include_router(consultation_router, prefix="/api/v1")
app.include_router(admin_router, prefix=f"{API_PREFIX}/admin", tags=["Admin"])


# Health check endpoints
@app.get("/", tags=["Health"])
async def root():
    """Root endpoint"""
    return {
        "success": True,
        "message": f"Welcome to {settings.APP_NAME} API",
        "version": "1.0.0",
        "environment": settings.ENVIRONMENT,
        "docs": "/api/docs" if settings.DEBUG else None,
    }


@app.get("/health", tags=["Health"])
async def health_check():
    """Comprehensive health check endpoint"""
    db_health = await check_connection_health()
    services = {
        "database": db_health,
        "api": {"status": "healthy", "message": "API is operational"},
    }
    all_healthy = all(s.get("status") == "healthy" for s in services.values())
    return {
        "success": all_healthy,
        "status": "healthy" if all_healthy else "degraded",
        "timestamp": __import__("datetime").datetime.utcnow().isoformat(),
        "environment": settings.ENVIRONMENT,
        "services": services,
    }


@app.get("/api/health/detailed", tags=["Health"])
async def detailed_health_check():
    """Detailed health check for monitoring systems"""
    import psutil
    import time

    db_health = await check_connection_health()
    process = psutil.Process()
    memory_info = process.memory_info()

    return {
        "status": "healthy" if db_health.get("status") == "healthy" else "unhealthy",
        "timestamp": time.time(),
        "database": db_health,
        "system": {
            "cpu_percent": psutil.cpu_percent(interval=0.1),
            "memory": {
                "rss": memory_info.rss,
                "vms": memory_info.vms,
                "percent": process.memory_percent(),
            },
            "connections": len(process.connections()),
            "open_files": len(process.open_files()),
            "threads": process.num_threads(),
        },
        "uptime": time.time() - process.create_time(),
    }


@app.middleware("http")
async def log_requests(request, call_next):
    """Log all requests in debug mode"""
    if settings.DEBUG:
        logger.debug(f"Request: {request.method} {request.url.path}")
        start_time = __import__("time").time()
        response = await call_next(request)
        process_time = (__import__("time").time() - start_time) * 1000
        logger.debug(f"Response: {response.status_code} ({process_time:.2f}ms)")
        return response
    return await call_next(request)


__all__ = ["app"]