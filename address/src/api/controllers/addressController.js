const mongoose = require('mongoose');
const Address = require('../../schemas/address');

module.exports = {
  async index(req, res) {
    try {
      const addresses = await Address.find({});

      return res.json({
        success: true,
        addresses,
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
      const { _id } = req.params;

      const address = await Address.findOne({ _id });

      return res.json({
        success: true,
        address,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        error: 'address_not_found',
        message: 'Endereço não encontrado',
      });
    }
  },

  async store(req, res) {
    try {
      const { 
        zip_code,
        street,
        number,
        neighborhood,
        city,
        state,
        complement = "",
        description,
        lat,
        lng
      } = req.body;

      if (!zip_code || !street || !number || !neighborhood ||
          !city || !state || !description || !lat || !lng) {
        return res.status(400).json({
          success: false,
          error: 'incomplete_fields',
          message: 'Campos incompletos',
        });
      }

      const address = await Address.create({
        zip_code,
        street,
        number,
        neighborhood,
        city,
        state,
        complement,
        description,
        lat,
        lng
      });

      return res.status(201).json({
        success: true,
        address,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'error_to_create_address',
        message: 'Erro ao criar um endereço',
      });
    }
  },
  
  async update(req, res) {
    try {
      const { 
        zip_code,
        street,
        number,
        neighborhood,
        city,
        state,
        complement = "",
        description,
        lat,
        lng,
      } = req.body;
      const { _id } = req.params;

      if (!zip_code || !street || !number || !neighborhood ||
          !city || !state || !description || !lat || !lng) {
        return res.status(400).json({
          success: false,
          error: 'incomplete_fields',
          message: 'Campos incompletos',
        });
      }

      const address = await Address.findOneAndUpdate(
        { _id },
        {
          zip_code,
          street,
          number,
          neighborhood,
          city,
          state,
          complement,
          description,
          lat,
          lng
        },
        {
          new: true,
        },
      );

      return res.status(200).json({
        success: true,
        address,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'error_to_update_address',
        message: 'Erro ao atualizar um endereço',
      });
    }
  },

  async destroy(req, res) {
    try {
      const { _id } = req.params;

      await Address.findOneAndDelete({ _id });

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
