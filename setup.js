const readline = require('readline');
const fs = require('fs');

function setUpConfiguration() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    try {
        if (fs.existsSync('config.js') && fs.existsSync('.env')) {
            console.log('config.js and .env file already exists. Skipping...');
        }
        rl.close();
    } catch (err) {
        rl.question('Enter marketIds (comma-separated, or press Enter to use default []): ', (marketIds) => {
            rl.question('Enter searchCriteria keywords (comma-separated, or press Enter to use default []): ', (keywords) => {
                rl.question('Enter Discord webhook URL (or press Enter to use default empty value): ', (discordWebhookUrl) => {
                    rl.question('Enter Telegram bot token (or press Enter to use default empty value): ', (telegramBotToken) => {
                        rl.question('Enter Telegram chat ID (or press Enter to use default empty value): ', (telegramChatId) => {
                            rl.close();

                            // Set default values if input is not provided
                            const parsedMarketIds = marketIds ? marketIds.split(',').map((id) => id.trim()) : [];
                            const parsedKeywords = keywords ? keywords.split(',').map((kw) => kw.trim()) : [];

                            // Create config.js and .env files with user input
                            createConfigFile(parsedMarketIds, parsedKeywords);
                            createEnvFile(discordWebhookUrl, telegramBotToken, telegramChatId);
                        });
                    });
                });
            });
        });
    }
}

function createConfigFile(marketIds, keywords) {
    const configTemplate = `require('dotenv').config();
    module.exports = {
    marketIds: ${JSON.stringify(marketIds, null, 2)},
    searchCriteria: {
      keywords: ${JSON.stringify(keywords, null, 2)},
    },
    discordWebhookUrl: process.env.DISCORD_WEBHOOK_URL,
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
  };
  `;

    try {
        fs.writeFileSync('config.js', configTemplate, {
            flag: 'wx'
        });
        console.log('config.js file created.');
    } catch (error) {
        console.error('Error creating config.js:', error.message);
    }
}

function createEnvFile(discordWebhookUrl, telegramBotToken, telegramChatId) {
    const envTemplate = `DISCORD_WEBHOOK_URL=${discordWebhookUrl || ''}
  TELEGRAM_BOT_TOKEN=${telegramBotToken || ''}
  TELEGRAM_CHAT_ID=${telegramChatId || ''}
  `;

    try {
        fs.writeFileSync('.env', envTemplate, {
            flag: 'wx'
        });
        console.log('.env file created.');
    } catch (error) {
        console.error('Error creating .env file:', error.message);
    }
}

module.exports = {
    setUpConfiguration
};