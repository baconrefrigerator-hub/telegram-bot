const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

// /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello 👋 I am online!');
});

// /ping
bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Pong 🏓');
});

// robux trigger
bot.on('message', (msg) => {
  const text = msg.text?.toLowerCase();

  if (text && text.includes('robux')) {
    bot.sendMessage(msg.chat.id, 'NAHHH YOU POOR!! 💀');
  }
});

console.log('Bot running...');
