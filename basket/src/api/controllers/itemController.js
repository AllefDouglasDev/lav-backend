const Basket = require('../../schemas/basket');
const ItemService = require('../services/item');

module.exports = {
  async index(req, res) {
    const { _id } = req.params;

    try {
      const basket = await Basket.findOne({ _id });

      if (!basket) {
        return res.status(409).json({ 
          success: false,
          error: 'basket_not_found',
          message: 'Cesta não encontrada',
        });
      }

      let items = [];

      for (let i = 0; i < basket.items.length; i++) {
        const itemId = basket.items[i];
        const { data } = await ItemService.getItemById(itemId);

        items.push(data.item);
      }

      return res.status(200).json({
        success: true,
        basket: { 
          _id: basket._id,
          user_id: basket.user_id,
          items,
        },
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
