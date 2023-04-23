const yargs = require('yargs/yargs');
const {
    hideBin
} = require('yargs/helpers');
const {
    setUpConfiguration
} = require('./setup');
const {
    scrapeOffers
} = require('./scraper');

const argv = yargs(hideBin(process.argv))
    .command({
        command: 'setup',
        describe: 'Set up the configuration and environment variables for the application',
        handler: () => {
            setUpConfiguration();
        },
    })
    .command({
        command: 'scrape',
        describe: 'Scrape offers from the selected markets and send notifications for matched offers',
        handler: async () => {
            console.log('Starting the scraping process...');
            await scrapeOffers();
            console.log('Scraping process completed.');
        },
    })
    .demandCommand(1, 'You must provide a valid command.')
    .help()
    .argv;