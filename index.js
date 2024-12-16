const { Telegraf } = require("telegraf");
const keepalive = require('./keep_alive.js')
// توکن ربات را از BotFather دریافت کنید و اینجا جایگذاری کنید
const bot = new Telegraf("7765736774:AAEGa4eQlwnCjwPl8ZxHQFdhVjg0c_7urvc");

// آی‌دی تلگرام فردی که پیام‌ها باید به او ارسال شوند (ادمین)
const ADMIN_ID = 5375945127; // به جای این مقدار، آی‌دی ادمین را قرار دهید

// وقتی کاربر دستور /start را می‌فرستد
bot.start((ctx) => {
    ctx.reply(
        "👋 سلام! شما به ربات ناشناس خوش آمدید. پیام خود را ارسال کنید تا به ادمین منتقل شود.",
    );
});

// هندل پیام‌های کاربران
bot.on("text", (ctx) => {
    const senderId = ctx.chat.id;
    const messageText = ctx.message.text;

    // ارسال پیام به ادمین
    bot.telegram.sendMessage(
        ADMIN_ID,
        `📩 پیام ناشناس دریافت شد:\n\n${messageText}\n\n👤 از کاربر: ${senderId}`,
    );

    // ارسال تأیید به فرستنده
    ctx.reply("✅ پیام شما به ادمین ارسال شد.");
});

// اجرای ربات
bot.launch();
console.log("🚀 ربات راه‌اندازی شد!");



cot = process.env.TOKEN
