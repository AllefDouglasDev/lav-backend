const { verifyJWT } = require('../config/jwt');
const addressController = require('./controllers/addressController');

module.exports = (app) => {
  app.get('/', addressController.index);
  app.get('/:_id', addressController.show);
  app.post('/', addressController.store);
  app.put('/:_id', addressController.update);
  app.delete('/:_id', addressController.destroy);
};
