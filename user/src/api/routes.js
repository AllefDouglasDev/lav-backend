const { verifyJWT } = require('../config/jwt');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const addressController = require('./controllers/addressController');

module.exports = (app) => {
  app.post('/', userController.store);
  app.get('/:_id', userController.show);
  app.put('/:_id', userController.update);

  app.get('/:_id/address', addressController.show);
  
  app.post('/login', authController.login);
};
