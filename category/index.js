require("dotenv-safe").config();

const api = require('./src/api/routes');
const server = require('./server');

server.start(api);
