const { verifyJWT } = require('../config/jwt');
const orderController = require('./controllers/orderController');

module.exports = (app) => {
  app.get('/', orderController.index);
  //app.get('/:_id', orderController.show);
  app.post('/', orderController.store);
  //app.put('/:_id', orderController.update);
  //app.delete('/:_id', orderController.destroy);
};
