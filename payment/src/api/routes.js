const paymentController = require('./controllers/paymentController');

module.exports = (app) => {
  app.get('/', paymentController.index);
};
