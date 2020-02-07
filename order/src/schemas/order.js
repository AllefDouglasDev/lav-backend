const mongoose = require('mongoose');

const Order = new mongoose.Schema({
  name:  String,
});

module.exports = mongoose.model('Order', Order);
