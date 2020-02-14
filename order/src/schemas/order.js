const mongoose = require('mongoose');

const Order = new mongoose.Schema({
  customer_id: mongoose.Types.ObjectId,
  service_provider_id: mongoose.Types.ObjectId,
  pick_address_id: mongoose.Types.ObjectId,
  drop_address_id: mongoose.Types.ObjectId,
  payment_method: String,
  payment_value: Number,
  status: String,
}, { timestamps: true });

module.exports = mongoose.model('Order', Order);
