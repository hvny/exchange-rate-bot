import { Bot } from 'grammy';
import { BotContext } from '../../../models/bot-session/bot-session.model';
import showMenuKeyboard from '../../../lib/keyboards/menu/menu.keyboard';

const startCommand = (bot: Bot<BotContext>) => {
  bot.command('start', async (ctx) => {
    const { id, username, first_name, last_name, language_code } =
      ctx.from ?? {};
    if (!id) return;
    const user = ctx.from ?? '';

    try {
      await ctx.reply(
        `Привет! Я помогу тебе следить за <b>актуальным курсом валют</b> в реальном времени.\n\n` +
        `📌 Вот что я умею:\n` +
        // \t💱 /rate — показать текущий курс популярных валют\n +
        `💰 /setcurrency — установить основную валюту (по умолчанию: USD)\n` +
        `📊 /convert — конвертировать сумму из одной валюты в другую\n` +
        `ℹ️ /help — показать информацию о боте\n`,
        { parse_mode: 'HTML', reply_markup: showMenuKeyboard() },
      );

      await ctx.reply(`${JSON.stringify(user)}`);
    } catch (error) {
      await ctx.reply('Произошла ошибка. Попробуйте позже.');
    }
  });
};

export default startCommand;
