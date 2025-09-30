"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const showMenuKeyboard = () => {
    const keyboard = new grammy_1.InlineKeyboard();
    keyboard
        .text('💱 Текущий курс', 'current_exchange_rate')
        .row()
        .text('🔁 Изменить основную валюту', 'set_default_currency')
        .row()
        .text('📊 Конвертировать', 'convert_currency');
    return keyboard;
};
exports.default = showMenuKeyboard;
