const Category = require('../../schemas/category');
const Queue = require('../../config/queue');
const axios = require('axios');

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

      Queue.sendToQueue('get:items', { category_id: _id });
      const { data: { items }} = await axios.get('http://localhost:3000/items?category_id='+_id);

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
  
  async show(req, res) {

  },
  
  async store(req, res) {

  },
  
  async update(req, res) {
 
  },
  
  async destroy(req, res) {

  },
};
