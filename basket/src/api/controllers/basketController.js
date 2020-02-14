const Basket = require('../../schemas/basket');

module.exports = {
  async store(req, res) {
    const { user_id, items } = req.body;

    try {
      const openBasket = await Basket.findOne({ status: 'open', user_id });

      if (openBasket) {
        return res.status(409).json({ 
          success: false,
          error: 'opened_basket',
          message: 'Existe uma cesta em aberto para esse usuário',
          openBasket,
        });
      }

      const basket = await Basket.create({ 
        user_id,
        items,
        status: 'open',
      });

      return res.status(201).json({
        success: true,
        basket,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: 'invalid_format_id',
        message: 'Erro no formato do ID do item ou do usuário',
      });
    }

  },

  async show(req, res) {
    const { _id } = req.params;

    try {
      const basket = await Basket.findOne({ _id });

      if (!basket) {
        return res.status(404).json({
          success: false,
          error: 'basket_not_found',
          message: 'Cesta não encontrada'
        });
      }

      return res.json({ success: true, basket });
    } catch (error) {
      return res.status(404).json({
        success: false,
        error: 'basket_not_found',
        message: 'Cesta não encontrada'
      });
    }
  },

  async update(req, res) {
    const { _id } = req.params;
    const { items, order_id } = req.body;

    try {
      const basket = await Basket.findOne({ _id });

      if (!basket) {
        return res.status(404).json({
          success: false,
          error: 'basket_not_found',
          message: 'Cesta não encontrada',
        });
      }

      basket.items = items;

      if (order_id) {
        basket.order_id = order_id;
        basket.status = 'close';
      }

      await basket.save();

      return res.json({
        success: true,
        basket,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: 'invalid_format_id',
        message: 'Erro no formato do ID do item ou da ordem de serviço',
      });
    }
  }
};
