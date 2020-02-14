const mongoose = require('mongoose');

const ServiceProviderItem = new mongoose.Schema({
  service_provider_id: mongoose.Types.ObjectId,
  items: [{
    _id: mongoose.Types.ObjectId,
    price: Number,
  }],
});

module.exports = mongoose.model('ServiceProviderItem', ServiceProviderItem);
