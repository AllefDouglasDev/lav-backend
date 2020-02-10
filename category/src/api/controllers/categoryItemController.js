const Category = require('../../schemas/category');

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

      return res.json({
        success: true,
        category,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: 'invalid_category_id',
        message: 'ID de categoria inválido',
      });
    }
  },
  
  async show(req, res) {

  },
  
  async store(req, res) {

  },
  
  async update(req, res) {
 
  },
  
  async destroy(req, res) {

  },
};
