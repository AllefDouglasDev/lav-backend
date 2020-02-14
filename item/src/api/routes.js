const itemController = require('./controllers/itemController');
const serviceProviderItemController = require('./controllers/serviceProviderItemController');

module.exports = (app) => {
  app.get('/', itemController.index);
  app.get('/:_id', itemController.show);
  app.get('/service-provider/:service_provider_id', serviceProviderItemController.index);

  app.post('/service-provider', serviceProviderItemController.store);
  app.post('/', itemController.store);
 
  app.put('/:_id', itemController.update);
  app.delete('/:_id', itemController.destroy);

  
  
};
