const User = require('../../schemas/user');

module.exports = {
  async index(req, res) {
    try {
      const serviceProviders = await User.find({ type: 'service_provider'});

      return res.json({ success: true, service_providers: serviceProviders });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error,
        message: 'Server error',
      });
    }
  }
}