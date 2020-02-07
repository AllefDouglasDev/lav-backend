const Category = require('../../schemas/category');

module.exports = {
  async index(req, res) {
    try {
      const categories = await Category.find({});

      return res.json({
        success: true,
        categories,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error,
        message: 'Erro no servidor',
      });
    }
  },
  
  async show(req, res) {
    try {
      const category = await Category.findOne({ _id: req.params._id });
      return res.json({ success: true, category });
    } catch (error) {
      return res.status(404).json({
        success: false,
        error: 'category_not_found',
        message: 'Categoria não encontrada',
      });
    }
  },
  
  async store(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({
          success: false,
          error: 'incomplete_fields',
          message: 'Campos incompletos',
        });
      }

      const category = await Category.findOneAndUpdate(
        { name },
        {},
        { upsert: true, new: true },
      );

      return res.json({ success: true, category });
    } catch (error) {
      return res.status(404).json({
        success: false,
        error,
        message: 'Erro no servidor',
      });
    }
  },
  
  async update(req, res) {
    try {
      const { name } = req.body;
      const { _id } = req.params;

      if (!name) {
        return res.status(400).json({
          success: false,
          error: 'incomplete_fields',
          message: 'Campos incompletos',
        });
      }

      const category = await Category.findOneAndUpdate(
        { _id },
        { name },
        { new: true },
      );

      return res.json({ success: true, category });
    } catch (error) {
      return res.status(404).json({
        success: false,
        error,
        message: 'Erro no servidor',
      });
    }
  },
  
  async destroy(req, res) {
    try {
      const { _id } = req.params;

      await Category.findOneAndDelete({ _id });

      return res.json({ success: true });
    } catch (error) {
      return res.status(404).json({
        success: false,
        error,
        message: 'Erro no servidor',
      });
    }
  },
};
