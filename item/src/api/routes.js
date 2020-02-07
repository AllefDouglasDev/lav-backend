const { verifyJWT } = require('../config/jwt');
const itemController = require('./controllers/itemController');

module.exports = (app) => {
  app.get('/', itemController.index);
  app.get('/:_id', itemController.show);
  app.post('/', itemController.store);
  app.put('/:_id', itemController.update);
  app.delete('/:_id', itemController.destroy);
};
