const { verifyJWT } = require('../config/jwt');
const notificationController = require('./controllers/notificationController');

module.exports = (app) => {
  app.get('/', notificationController.index);
  app.get('/:_id', notificationController.show);
  app.post('/', notificationController.store);
  app.put('/:_id', notificationController.update);
  app.delete('/:_id', notificationController.destroy);
};
