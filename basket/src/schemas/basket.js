const mongoose = require('mongoose');

const Basket = new mongoose.Schema({
  user_id: mongoose.Types.ObjectId,
  items: [mongoose.Types.ObjectId],
  order_id: mongoose.Types.ObjectId,
  status: String,
}, { timestamps: true });

module.exports = mongoose.model('Basket', Basket);
