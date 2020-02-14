const basketController = require('./controllers/basketController');
const itemController = require('./controllers/itemController');

module.exports = (app) => {
  app.post('/', basketController.store);
  app.get('/:_id', basketController.show);
  app.put('/:_id', basketController.update);

  app.get('/:_id/items', itemController.index);
};
