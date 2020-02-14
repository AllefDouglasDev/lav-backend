const AddressService = require('../services/address');
const User = require('../../schemas/user');

module.exports = {
  async show(req, res) {
    const { _id } = req.params;
    try {
      const user = await User.findOne({ _id });

      if (!user) {
        return res.json({
          success: false,
          error: 'user_not_found',
          message: 'Usuário não encontrado',
        });
      }

      const { data: { address } } = await AddressService.getAddressById(user.address_id);
      
      res.json({
        success: true,
        address,
      });
    } catch (error) {
      return res.json({
        success: false,
        error: 'user_not_found',
        message: 'Usuário não encontrado',
      });
    }
  }
}