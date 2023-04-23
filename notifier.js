const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');
const {
    discordWebhookUrl,
    telegramBotToken,
    telegramChatId
} = require('./config');

// Initialize Telegram bot
const telegramBot = new TelegramBot(telegramBotToken, {
    polling: false
});

async function sendToDiscord(offer) {
    try {
        const messageContent = formatDiscordMessage(offer);
        await axios.post(discordWebhookUrl, {
            content: messageContent,
        });
        console.log('Sent offer to Discord');
    } catch (error) {
        console.error('Error sending message to Discord:', error.message);
    }
}

async function sendToTelegram(offer) {
    try {
        const messageContent = formatTelegramMessage(offer);
        await telegramBot.sendMessage(telegramChatId, messageContent, {
            parse_mode: 'Markdown'
        });
        console.log('Sent offer to Telegram');
    } catch (error) {
        console.error('Error sending message to Telegram:', error.message);
    }
}

function formatDiscordMessage(offer) {
    // Customize the message format as needed
    return `**${offer.titel}**\nPreis: ${offer.preis} €\n(${offer.beschreibung})`;
}

function formatTelegramMessage(offer) {
    // Customize the message format as needed
    return `*${offer.titel}*\nPreis: ${offer.preis} €\n(${offer.beschreibung})`;
}

module.exports = {
    sendToDiscord,
    sendToTelegram
};