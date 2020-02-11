require("dotenv-safe").config();

const api = require('./src/api/routes');
const server = require('./server');
const worker = require('./src/worker');

worker(api);

server.start(api);
