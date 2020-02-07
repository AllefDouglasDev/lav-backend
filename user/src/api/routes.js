const { verifyJWT } = require('../config/jwt');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

module.exports = (app) => {
  app.post('/users', userController.store);
  app.get('/users/:id', userController.show);
  
  app.post('/login', authController.login);
};
