const mongoose = require('mongoose');

const Address = new mongoose.Schema({
  zip_code: String,
  street: String,
  number: String,
  neighborhood: String,
  city:  String,
  state: String,
  complement: String,
  description: String,
  lat: Number,
  lng: Number,
});

module.exports = mongoose.model('Address', Address);
