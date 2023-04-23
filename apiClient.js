const axios = require('axios');

const API_BASE_URL = 'https://www.edeka.de/eh/service/eh/offers/';

const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
    // Add more User-Agent strings here
];

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    config.headers['User-Agent'] = userAgents[Math.floor(Math.random() * userAgents.length)];
    return config;
});

async function fetchOffers(marketId) {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}?marketId=${marketId}&limit=100000`);
        return response.data;

    } catch (error) {
        console.error(`Error fetching offers for marketId ${marketId}:`, error.message);
        return null;
    }
}

module.exports = {
    fetchOffers
};