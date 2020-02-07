const mongoose = require('mongoose');

const Item = new mongoose.Schema({
  name:  String,
  category_id: mongoose.Types.ObjectId,
});

module.exports = mongoose.model('Item', Item);
