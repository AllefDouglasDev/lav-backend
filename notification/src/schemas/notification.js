const mongoose = require('mongoose');

const Notification = new mongoose.Schema({
  name:  String,
});

module.exports = mongoose.model('Notification', Notification);
