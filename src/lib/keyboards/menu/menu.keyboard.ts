import { InlineKeyboard } from 'grammy';

const showMenuKeyboard = () => {
  const keyboard = new InlineKeyboard();
  keyboard
    .text('💱 Текущий курс', 'current_exchange_rate')
    .row()
    .text('🔁 Изменить основную валюту', 'set_default_currency')
    .row()
    .text('📊 Конвертировать', 'convert_currency');

  return keyboard;
};

export default showMenuKeyboard;
