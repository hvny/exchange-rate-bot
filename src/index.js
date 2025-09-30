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
require("./lib/env/env");
const mongoose_1 = __importDefault(require("mongoose"));
const bot_1 = require("./bot/bot");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoDbUrl = process.env.MONGO_DB_URL;
        if (!mongoDbUrl) {
            throw new Error('Не указана переменная окружения MONGO_DB_URL');
        }
        yield mongoose_1.default.connect(mongoDbUrl);
        console.log('✅ Подключено к MongoDB через mongoose');
        yield (0, bot_1.initBot)();
        yield bot_1.bot.start();
    }
    catch (error) {
        console.error('Ошибка запуска приложения:', error);
        process.exit(1);
    }
});
start();
