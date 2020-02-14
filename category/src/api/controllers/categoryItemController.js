const Category = require('../../schemas/category');
const ItemService = require('../services/item');

module.exports = {
  async index(req, res) {
    const { _id } = req.params;

    try {
      const category = await Category.findOne({ _id });

      if (!category) {
        return res.status(400).json({
          success: false,
          error: 'invalid_category_id',
          message: 'ID de categoria inválido',
        });
      }

      const { data: { items }} = await ItemService.getItemsByCategoryId(_id);

      return res.json({
        success: true,
        category,
        items,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        error: 'invalid_category_id',
        message: 'ID de categoria inválido',
        desc: error,
      });
    }
  },
};
