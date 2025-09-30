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
exports.bot = void 0;
exports.initBot = initBot;
require("../lib/env/env");
const grammy_1 = require("grammy");
const mongoose_1 = __importDefault(require("mongoose"));
const storage_mongodb_1 = require("@grammyjs/storage-mongodb");
const start_command_1 = __importDefault(require("./commands/start/start.command"));
exports.bot = new grammy_1.Bot(process.env.TELEGRAM_BOT_TOKEN);
/* const i18n = new I18n<BotContext>({
  defaultLocale: 'en',
  directory: 'src/lib/locales',
});

bot.use(i18n); */
exports.bot.catch((err) => {
    const ctx = err.ctx;
    console.error(err.error);
    ctx.reply('Произошла ошибка при обработке команды. Попробуйте позже.');
});
function initBot() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!mongoose_1.default.connection.db) {
            throw new Error('MongoDB connection is not established');
        }
        const collection = mongoose_1.default.connection.db.collection('sessions');
        const storage = new storage_mongodb_1.MongoDBAdapter({
            collection,
        });
        exports.bot.use((0, grammy_1.session)({
            initial: () => ({
                baseUserCurrency: 'USD',
                lang: 'en',
            }),
            storage,
        }));
        (0, start_command_1.default)(exports.bot);
    });
}
