const ServiceProviderItem = require('../../schemas/serviceProviderItem');
const Item = require('../../schemas/item');

module.exports = {
  async index(req, res) {
    const { service_provider_id } = req.params;

    try {
      const serviceProviderItems = await ServiceProviderItem.find({ service_provider_id });
      
      let items = [];

      for (let i = 0; i < serviceProviderItems.length; i++) {
        console.log(serviceProviderItems.item_id);
      }

      return res.json({
        success: true,
        items,
        serviceProviderItems,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error,
        message: 'Erro no servidor',
      });
    }
  },

  async store(req, res) {
    const { service_provider_id, items } = req.body;

    if (!service_provider_id || items.length <= 0) {
      return res.status(400).json({
        success: false,
        error: 'incomplete_fields',
        message: 'Campos incompletos',
      });
    }

    try {
      let spi = await ServiceProviderItem.findOne({ service_provider_id });

      if (spi) {
        spi.items = [...spi.items, ...items];
        spi.save();
      } else {
        constspi = await ServiceProviderItem.create({
          service_provider_id,
          items,
        });
      }

      return res.status(201).json({
        success: true,
        spi,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error,
        message: 'Erro no servidor',
      });
    }
  },
}