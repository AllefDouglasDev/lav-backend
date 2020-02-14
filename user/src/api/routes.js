const { verifyJWT } = require('../config/jwt');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const addressController = require('./controllers/addressController');
const servicePoviderController = require('./controllers/servicePoviderController');

module.exports = (app) => {
  app.get('/service-provides', servicePoviderController.index);
  app.get('/:_id', userController.show);
  app.post('/', userController.store);
  app.put('/:_id', userController.update);

  app.get('/:_id/address', addressController.show);
  
  app.post('/login', authController.login);
};
