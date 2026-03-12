import logging
from fastapi import APIRouter, HTTPException, Depends
from app.models.article import ArticleCreate, ArticleUpdate
from app.services.admin_service import (
    get_dashboard_stats,
    get_all_articles,
    create_article,
    update_article,
    delete_article,
    get_all_subscribers,
    get_all_contact_messages,
    get_all_consultations,
)
from app.core.dependencies import get_current_user
from app.models.user import UserModel

logger = logging.getLogger(__name__)
router = APIRouter()


def require_admin(current_user: UserModel = Depends(get_current_user)) -> UserModel:
    """Dependency that ensures the current user is an admin"""
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Admin access required")
    return current_user


# ─── STATS ───────────────────────────────────────────────────────────────────

@router.get("/stats")
async def dashboard_stats(admin: UserModel = Depends(require_admin)):
    stats = await get_dashboard_stats()
    return {"success": True, "data": stats}


# ─── ARTICLES ────────────────────────────────────────────────────────────────

@router.get("/articles")
async def list_articles(admin: UserModel = Depends(require_admin)):
    articles = await get_all_articles()
    return {"success": True, "data": articles}


@router.post("/articles", status_code=201)
async def add_article(data: ArticleCreate, admin: UserModel = Depends(require_admin)):
    article = await create_article(data)
    if not article:
        raise HTTPException(status_code=500, detail="Failed to create article")
    return {"success": True, "data": article}


@router.put("/articles/{article_id}")
async def edit_article(article_id: str, data: ArticleUpdate, admin: UserModel = Depends(require_admin)):
    article = await update_article(article_id, data)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"success": True, "data": article}


@router.delete("/articles/{article_id}")
async def remove_article(article_id: str, admin: UserModel = Depends(require_admin)):
    deleted = await delete_article(article_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"success": True, "message": "Article deleted successfully"}


# ─── SUBSCRIBERS ─────────────────────────────────────────────────────────────

@router.get("/subscribers")
async def list_subscribers(admin: UserModel = Depends(require_admin)):
    subscribers = await get_all_subscribers()
    return {"success": True, "data": subscribers, "total": len(subscribers)}


# ─── FORM SUBMISSIONS ────────────────────────────────────────────────────────

@router.get("/submissions")
async def list_submissions(admin: UserModel = Depends(require_admin)):
    contacts = await get_all_contact_messages()
    consultations = await get_all_consultations()
    all_submissions = sorted(
        contacts + consultations,
        key=lambda x: x.get("created_at") or "",
        reverse=True
    )
    return {"success": True, "data": all_submissions, "total": len(all_submissions)}


@router.get("/submissions/contacts")
async def list_contacts(admin: UserModel = Depends(require_admin)):
    contacts = await get_all_contact_messages()
    return {"success": True, "data": contacts, "total": len(contacts)}


@router.get("/submissions/consultations")
async def list_consultations(admin: UserModel = Depends(require_admin)):
    consultations = await get_all_consultations()
    return {"success": True, "data": consultations, "total": len(consultations)}