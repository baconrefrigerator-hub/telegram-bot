const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// ================== SIGMA ==================
bot.onText(/\/sigma/, (msg) => {
  const username = msg.from.username
    ? `@${msg.from.username}`
    : msg.from.first_name;

  bot.sendMessage(msg.chat.id, `${username} is sigma!!!🤨`);
});

// ================== HACK (SHORT) ==================
bot.onText(/\/hack/, async (msg) => {
  const chatId = msg.chat.id;

  const steps = [
    "Accessing system...",
    "Bypassing firewall...",
    "Injecting payload...",
    "ACCESS GRANTED 😈"
  ];

  let message = await bot.sendMessage(chatId, "Starting hack...");

  for (let i = 0; i < steps.length; i++) {
    await new Promise(r => setTimeout(r, 900));

    bot.editMessageText(steps[i], {
      chat_id: chatId,
      message_id: message.message_id
    });
  }
});

// ================== TERMINAL (EPIC MODE) ==================
bot.onText(/\/terminal/, async (msg) => {
  const chatId = msg.chat.id;

  const lines = [
    "BOOTING SYSTEM...",
    "CONNECTING NODE...",
    "BYPASSING FIREWALL [█░░░░░░░░░] 10%",
    "BYPASSING FIREWALL [██████░░░░] 60%",
    "BYPASS COMPLETE [██████████] 100%",
    "DECRYPTING DATA...",
    "ACCESS GRANTED ✔"
  ];

  let msgObj = await bot.sendMessage(chatId, ">>> INITIALIZING TERMINAL...");

  for (let i = 0; i < lines.length; i++) {
    await new Promise(r => setTimeout(r, 1000));

    bot.editMessageText(lines[i], {
      chat_id: chatId,
      message_id: msgObj.message_id
    });
  }

  setTimeout(() => {
    bot.sendMessage(chatId, "😎 SYSTEM HACK SIMULATION COMPLETE");
  }, 1200);
});

// ================== ROBUX TRIGGER ==================
bot.on('message', (msg) => {
  const text = msg.text?.toLowerCase();

  if (text && text.includes('robux')) {
    bot.sendMessage(msg.chat.id, 'NAHHH YOU POOR!! 💀');
  }
});

console.log("Bot is running...");
