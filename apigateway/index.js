require("dotenv-safe").config();

const http = require('http');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const ip = require('./ip');
const proxy = require('./proxy');

proxy(app);

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

