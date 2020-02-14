const Basket = require('../../schemas/basket');
const ItemService = require('../services/item');

module.exports = {
  async index(req, res) {
    const { _id } = req.params;

    try {
      let basket = await Basket.findOne({ _id });

      if (!basket) {
        return res.status(409).json({ 
          success: false,
          error: 'basket_not_found',
          message: 'Cesta não encontrada',
        });
      }

      let items = [];

      for (let i = 0; i < basket.items.length; i++) {
        const currentItem = basket.items[i];
        const { data } = await ItemService.getItemById(currentItem.id);
        items.push({ ...data.item, amount: currentItem.amount });
      }

      basket = basket.toJSON();
      basket.items = items;

      return res.status(200).json({
        success: true,
        basket,
      });
    } catch (error) {
      return res.status(409).json({ 
        success: false,
        error: 'basket_not_found',
        message: 'Cesta não encontrada',
      });
    }

  },
};
