const Order = require('../../schemas/order');

module.exports = {
  async index(req, res) {
    try {
      const orders = await Order.find({});

      return res.json({
        success: true,
        orders,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error,
        message: 'Erro',
      });
    }
  },

  async store(req, res) {
    const { 
      customer_id,
      service_provider_id,
      pick_address_id,
      drop_address_id,
      payment_method,
      payment_value,
    } = req.body;

    if (!customer_id || !service_provider_id || !pick_address_id
      || !drop_address_id || !payment_method || !payment_value) {
      return res.status(400).json({
        success: false,
        error: 'incomplete_fields',
        message: 'Campos incompletos',
      });
    }

    try {
      const order = await Order.create({
        customer_id,
        service_provider_id,
        pick_address_id,
        drop_address_id,
        payment_method,
        payment_value,
      });

      return res.json({ success: true, order });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error,
        message: 'Erro',
      });
    }
  },
}