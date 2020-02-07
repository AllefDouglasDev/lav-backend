const express = require('express');
const cors = require('cors');
const mongo = require('./src/config/mongodb');
const ip = require('./src/config/ip');

var server = null;

function start(api) {
  const app = express();
  app.use(cors());
  app.use(express.json());
  
  mongo.connect();

  api(app);

  server = app.listen(
    process.env.PORT, 
    () => console.log(`Api running on http://localhost:${process.env.PORT} or http://${ip.getIp()}:${process.env.PORT}`)
  );
}

function stop(){
  if (server) server.close();
  return true;
}

module.exports = { start, stop };