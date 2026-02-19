import mongoose from 'mongoose';
import logger from '../utils/logger';

export const checkDatabaseConnection = async (): Promise<boolean> => {
  try {
    const state = mongoose.connection.readyState;
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    return state === 1;
  } catch (error) {
    logger.error('Database connection check failed:', error);
    return false;
  }
};

export const getDatabaseStats = async () => {
  try {
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error('Database not connected');
    }

    const stats = await db.stats();
    const collections = await db.listCollections().toArray();

    return {
      collections: collections.length,
      dataSize: stats.dataSize,
      storageSize: stats.storageSize,
      indexes: stats.indexes,
      indexSize: stats.indexSize,
      avgObjSize: stats.avgObjSize
    };
  } catch (error) {
    logger.error('Failed to get database stats:', error);
    throw error;
  }
};

export const backupDatabase = async (): Promise<string> => {
  try {
    // In production, implement actual backup logic
    // This could use mongodump or cloud provider backups

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = `./backups/dph_backup_${timestamp}`;

    logger.info(`Database backup initiated: ${backupPath}`);

    return backupPath;
  } catch (error) {
    logger.error('Database backup failed:', error);
    throw error;
  }
};