import axios from 'axios';
import logger from '../utils/logger';
import { IStockData } from '../types';

// Mock data generator for development
const generateMockStockData = (symbol: string): IStockData => {
  const basePrice = {
    'AAPL': 175.50,
    'GOOGL': 140.25,
    'MSFT': 380.75,
    'TSLA': 240.30,
    'AMZN': 145.80,
    'META': 320.45
  }[symbol] || 100.00;

  const change = (Math.random() * 10) - 5;
  const changePercent = (change / basePrice) * 100;

  return {
    symbol,
    price: basePrice + change,
    change,
    changePercent,
    volume: Math.floor(Math.random() * 10000000),
    timestamp: new Date()
  };
};

export const getStockData = async (symbols: string[]): Promise<IStockData[]> => {
  // For production, you would use Alpha Vantage or another stock API
  // This is a mock implementation for development

  try {
    // Example with Alpha Vantage (commented out)
    /*
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
    const promises = symbols.map(async (symbol) => {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
      );
      const data = response.data['Global Quote'];
      return {
        symbol,
        price: parseFloat(data['05. price']),
        change: parseFloat(data['09. change']),
        changePercent: parseFloat(data['10. change percent'].replace('%', '')),
        volume: parseInt(data['06. volume']),
        timestamp: new Date()
      };
    });
    return await Promise.all(promises);
    */

    // Mock data for development
    return symbols.map(symbol => generateMockStockData(symbol));
  } catch (error) {
    logger.error('Error fetching stock data:', error);
    // Fallback to mock data
    return symbols.map(symbol => generateMockStockData(symbol));
  }
};

export const subscribeToSymbols = (symbols: string[]): void => {
  // This would be used with a real WebSocket connection to a stock data provider
  logger.info(`Subscribed to symbols: ${symbols.join(', ')}`);
};