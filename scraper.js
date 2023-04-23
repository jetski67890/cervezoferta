const {
    fetchOffers
} = require('./apiClient');
const {
    sendToDiscord,
    sendToTelegram
} = require('./notifier');
const {
    marketIds,
    searchCriteria
} = require('./config');

async function scrapeOffers() {
    for (const marketId of marketIds) {
        console.log(`Fetching offers for marketId: ${marketId}`);
        const offers = await fetchOffers(marketId);

        if (!offers) {
            console.error(`Failed to fetch offers for marketId: ${marketId}`);
            continue;
        }

        console.log(`Processing offers for marketId: ${marketId}`);
        const matchedOffers = findMatchingOffers(offers, searchCriteria);

        if ((matchedOffers.length) > 0) {
            for (const offer of matchedOffers) {

                console.log(`Found ${matchedOffers.length} matching offers for marketId: ${marketId}`);
                console.log(`Matched offer: ${offer.titel}`);
                await sendToDiscord(offer);
                await sendToTelegram(offer);
            }
        } else {
            console.log(`No matching offers found for marketId: ${marketId}`);
        }
    }
}

function findMatchingOffers(offers, searchCriteria) {
    const matchedOffers = [];

    offers.docs.forEach(offer => {
        searchCriteria.keywords.forEach(keyword => {
            if (offer.titel.includes(keyword)) {
                matchedOffers.push(offer);
            }
        });
    });

    return matchedOffers;
}

module.exports = {
    scrapeOffers
};