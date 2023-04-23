require('dotenv').config();

module.exports = {
    marketIds: [
        // Add your list of marketIds to scrape
        // Marktkauf
        '10003036',
        // EDEKA Patschull
        '10002206'
    ],
    searchCriteria: {
        // Define your search criteria here
        keywords: [
            'Bayreuther Hell',
            'Augustiner Helles',
            'Paulaner'
        ]
    },
    discordWebhookUrl: process.env.DISCORD_WEBHOOK_URL,
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID
};