require("dotenv-safe").config();

const http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const ip = require('./ip');

const userServiceProxy = httpProxy('http://localhost:3001');
const categoriesServiceProxy = httpProxy('http://localhost:3002');
const itemsServiceProxy = httpProxy('http://localhost:3003');

// Proxy request
app.use('/users', (req, res, next) => {
  userServiceProxy(req, res, next);
});

app.use('/categories', (req, res, next) => {
  categoriesServiceProxy(req, res, next);
});

app.use('/items', (req, res, next) => {
  itemsServiceProxy(req, res, next);
});

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const server = http.createServer(app);
server.listen(
  process.env.PORT, 
  () => console.log(`Api running on http://localhost:${process.env.PORT} or http://${ip.getIp()}:${process.env.PORT}`),
);

