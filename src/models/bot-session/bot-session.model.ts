import { I18nFlavor } from '@grammyjs/i18n';
import { Context, SessionFlavor } from 'grammy';

export interface IBotSession {
  state?: string;
  baseUserCurrency: string;
  lang: string;
}

export type BotContext = Context & SessionFlavor<IBotSession>;
