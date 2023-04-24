<h1 align="center">Welcome to cervezoferta 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/jetski67890/cervezoferta#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jetski67890/cervezoferta/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jetski67890/cervezoferta/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/jetski67890/cervezoferta" />
  </a>
</p>

> command-line interface (CLI) application built with Node.js that scrapes the (unofficial) Edeka API for offers based on user-defined markets and search criteria. When a match is found, it sends a notification message containing the offer to a Discord Webhook and a Telegram Bot.


## Features

- Scrapes the Edeka API for offers per market
- Compares offer responses to user-defined search criteria
- Sends matched offers to a Discord Webhook and a Telegram Bot
- User-Agent rotation to help avoid detection
- Configurable settings via a configuration file

## Installation

1. Clone the repository:

```sh
git clone https://github.com/jetski67890/cervezoferta.git
```

2. Navigate to the project directory:

```sh
cd cerverzoferta
```

3. Install dependencies:

```sh
npm install
```

## Configuration

The config.js file contains the following configurable settings:

- marketIds: An array of marketIds to scrape for offers.
- searchCriteria: An array of keywords to match against the offer responses.

The .env should include the following settings for sending out notifications:

- discordWebhookUrl: The URL of the Discord Webhook for sending matched offers.
- telegramBotToken: The token of the Telegram Bot for sending matched offers.
- telegramChatId: The chat ID of the Telegram group or user for sending matched offers.

## Usage

1. Run the setup command to configure the application (or create .env and change config.js):

```sh
npm run setup
```

2. Start the scraping process:

```sh
npm run start
```

## Author

👤 **jetski67890**

* Github: [@jetski67890](https://github.com/jetski67890)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jetski67890/cervezoferta/issues). You can also take a look at the [contributing guide](https://github.com/jetski67890/cervezoferta/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [jetski67890](https://github.com/jetski67890).<br />
This project is [ISC](https://github.com/jetski67890/cervezoferta/blob/master/LICENSE) licensed.