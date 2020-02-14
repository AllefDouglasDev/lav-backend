const AddressService = require('../services/address');
const User = require('../../schemas/user');

module.exports = {
  async show(req, res) {
    const { _id } = req.params;
    try {
      let user = await User.findOne({ _id });

      if (!user) {
        return res.json({
          success: false,
          error: 'user_not_found',
          message: 'Usuário não encontrado',
        });
      }

      const { data: { address } } = await AddressService.getAddressById(user.address_id);

      user.password = undefined;
      user.address_id = undefined;
      user = user.toJSON();
      user.address = address;

      res.json({
        success: true,
        user,
      });
    } catch (error) {
      return res.json({
        success: false,
        error: 'address_not_found',
        message: 'Endereço de usuário encontrado',
      });
    }
  }
}