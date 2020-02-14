const api = require('./index');

module.exports = {
  async getItemById(id) {
    return api.get(`/items/${id}`);
  }
}