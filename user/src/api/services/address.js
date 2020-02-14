const api = require('./index');

module.exports = {
  getAddressById(id) {
    return api.get(`/addresses/${id}`);
  }
}