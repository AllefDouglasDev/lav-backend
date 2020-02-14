const api = require('./index');

module.exports = {
  getItemsByCategoryId(categoryId) {
    return api.get(`/items?category_id=${categoryId}`);
  }
}