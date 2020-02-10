const { verifyJWT } = require('../config/jwt');
const categoryController = require('./controllers/categoryController');
const categoryItemController = require('./controllers/categoryItemController');

module.exports = (app) => {
  app.get('/', categoryController.index);
  app.get('/:_id', categoryController.show);
  app.post('/', categoryController.store);
  app.put('/:_id', categoryController.update);
  app.delete('/:_id', categoryController.destroy);

  app.get('/:_id/items', categoryItemController.index);
};
