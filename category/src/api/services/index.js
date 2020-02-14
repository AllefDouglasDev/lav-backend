const axios = require('axios');

const api = axios.create({ baseURL: process.env.APP_BASE_URL });

module.exports = api;