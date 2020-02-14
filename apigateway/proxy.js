const httpProxy = require('express-http-proxy');

module.exports = (app) => {
  const userServiceProxy = httpProxy('http://localhost:3001');
  const categoriesServiceProxy = httpProxy('http://localhost:3002');
  const itemsServiceProxy = httpProxy('http://localhost:3003');
  const addressServiceProxy = httpProxy('http://localhost:3006');

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

  app.use('/addresses', (req, res, next) => {
    addressServiceProxy(req, res, next);
  });
}