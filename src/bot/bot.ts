import '../lib/env/env';
import { Bot, Context, session, StorageAdapter } from 'grammy';
import {
  BotContext,
  IBotSession,
} from '../models/bot-session/bot-session.model';
import mongoose from 'mongoose';
import { ISession, MongoDBAdapter } from '@grammyjs/storage-mongodb';
import { I18n, I18nFlavor } from '@grammyjs/i18n';
import startCommand from './commands/start/start.command';
import fs from 'fs';

export const bot = new Bot<BotContext>(process.env.TELEGRAM_BOT_TOKEN!);

/* const i18n = new I18n<BotContext>({
  defaultLocale: 'en',
  directory: 'src/lib/locales',
});

bot.use(i18n); */

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(err.error);
  ctx.reply('Произошла ошибка при обработке команды. Попробуйте позже.');
});

export async function initBot() {
  if (!mongoose.connection.db) {
    throw new Error('MongoDB connection is not established');
  }

  const collection = mongoose.connection.db.collection<ISession>('sessions');
  const storage = new MongoDBAdapter({
    collection,
  }) as StorageAdapter<IBotSession>;

  bot.use(
    session<IBotSession, Context>({
      initial: () => ({
        baseUserCurrency: 'USD',
        lang: 'en',
      }),
      storage,
    }),
  );

  startCommand(bot);
}
