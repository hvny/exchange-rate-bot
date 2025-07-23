import './lib/env/env';
import mongoose from 'mongoose';
import { bot, initBot } from './bot/bot';

const start = async () => {
  try {
    const mongoDbUrl = process.env.MONGO_DB_URL;

    if (!mongoDbUrl) {
      throw new Error('Не указана переменная окружения MONGO_DB_URL');
    }

    await mongoose.connect(mongoDbUrl);
    console.log('✅ Подключено к MongoDB через mongoose');

    await initBot();
    await bot.start();
  } catch (error) {
    console.error('Ошибка запуска приложения:', error);
    process.exit(1);
  }
};

start();
