const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

// ===== interval storage (per chat) =====
const intervals = {};

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

  bot.sendMessage(msg.chat.id, `${username} is sigma!!!🤨`);
});

// /go (safe fast spam)
bot.onText(/\/go/, (msg) => {
  const chatId = msg.chat.id;

  if (intervals[chatId]) {
    return bot.sendMessage(chatId, "Already running ⚠️");
  }

  bot.sendMessage(chatId, "Started sending messages ✅");

  intervals[chatId] = setInterval(() => {
    bot.sendMessage(chatId, "hi 👋");
  }, 500); // 1 second (safe limit)
});

// /stop
bot.onText(/\/stop/, (msg) => {
  const chatId = msg.chat.id;

  if (!intervals[chatId]) {
    return bot.sendMessage(chatId, "Nothing is running ❌");
  }

  clearInterval(intervals[chatId]);
  delete intervals[chatId];

  bot.sendMessage(chatId, "Stopped 🛑");
});

// robux trigger
bot.on('message', (msg) => {
  const text = msg.text?.toLowerCase();

  if (text && text.includes('robux')) {
    bot.sendMessage(msg.chat.id, 'NAHHH YOU POOR!! 💀');
  }
});

console.log('Bot running...');
