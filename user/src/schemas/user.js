const mongoose = require('mongoose');

const User = new mongoose.Schema({
  name:  String,
  phone: String,
  email: String,
  password: String,
  type: String,
  address_id: mongoose.Types.ObjectId
});

module.exports = mongoose.model('User', User);
