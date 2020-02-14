const mongoose = require('mongoose');
const Item = require('../../schemas/item');

module.exports = {
  async index(req, res) {
    const { category_id } = req.query;
    try {

      const items = category_id 
        ? await Item.find({ category_id }) 
        : await Item.find({});

      return res.json({
        success: true,
        items,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'invalid_params',
        message: 'Parâmetros inválidos',
      });
    }
  },

  async show(req, res) {
    try {
      const { _id } = req.params;

      const item = await Item.findOne({ _id });

      return res.json({
        success: true,
        item,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        error: 'item_not_found',
        message: 'Item não encontrado',
      });
    }
  },

  async store(req, res) {
    try {
      const { name, categoryId, price } = req.body;

      if (!name || !categoryId || !price) {
        return res.status(400).json({
          success: false,
          error: 'incomplete_fields',
          message: 'Campos incompletos',
        });
      }

      let item = await Item.findOne({ name });

      if (!item) {
        item = await Item.create({
          name,
          category_id: mongoose.Types.ObjectId(categoryId),
          price,
        });
      }

      return res.status(201).json({
        success: true,
        item,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'error_to_create_item',
        message: 'Erro ao criar um item',
      });
    }
  },
  
  async update(req, res) {
    try {
      const { name, categoryId, price } = req.body;
      const { _id } = req.params;

      if (!name || !categoryId || !price) {
        return res.status(400).json({
          success: false,
          error: 'incomplete_fields',
          message: 'Campos incompletos',
        });
      }

      const item = await Item.findOneAndUpdate(
        { _id },
        {
          name,
          category_id: mongoose.Types.ObjectId(categoryId),
          price
        },
        {
          new: true,
        },
      );

      return res.status(200).json({
        success: true,
        item,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'error_to_update_item',
        message: 'Erro ao atualizar um item',
      });
    }
  },

  async destroy(req, res) {
    try {
      const { _id } = req.params;

      await Item.findOneAndDelete({ _id });

      return res.json({ success: true });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error,
        message: 'Erro no servidor',
      });
    }
  },
};
