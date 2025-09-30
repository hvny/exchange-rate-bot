"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu_keyboard_1 = __importDefault(require("../../../lib/keyboards/menu/menu.keyboard"));
const startCommand = (bot) => {
    bot.command('start', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const { id, username, first_name, last_name, language_code } = (_a = ctx.from) !== null && _a !== void 0 ? _a : {};
        if (!id)
            return;
        const user = (_b = ctx.from) !== null && _b !== void 0 ? _b : '';
        try {
            yield ctx.reply(`Привет! Я помогу тебе следить за <b>актуальным курсом валют</b> в реальном времени.\n\n` +
                `📌 Вот что я умею:\n` +
                // \t💱 /rate — показать текущий курс популярных валют\n +
                `💰 /setcurrency — установить основную валюту (по умолчанию: USD)\n` +
                `📊 /convert — конвертировать сумму из одной валюты в другую\n` +
                `ℹ️ /help — показать информацию о боте\n`, { parse_mode: 'HTML', reply_markup: (0, menu_keyboard_1.default)() });
            yield ctx.reply(`${JSON.stringify(user)}`);
        }
        catch (error) {
            yield ctx.reply('Произошла ошибка. Попробуйте позже.');
        }
    }));
};
exports.default = startCommand;
