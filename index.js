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

// /sigma
bot.onText(/\/sigma/, (msg) => {
  const username = msg.from.username
    ? `@${msg.from.username}`
    : msg.from.first_name;

  bot.sendMessage(
    msg.chat.id,
    `${username} is sigma!!!🤨`
  );
});

// Robux trigger (any message containing robux)
bot.on('message', (msg) => {
  const text = msg.text?.toLowerCase();

  if (text && text.includes('robux')) {
    bot.sendMessage(msg.chat.id, 'NAHHH YOU POOR!! 💀');
  }
});

console.log('Bot is running...');
