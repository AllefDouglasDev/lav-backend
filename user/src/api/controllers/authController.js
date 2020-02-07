const jwt = require('jsonwebtoken');
const User = require('../../schemas/user');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user || user.password !== password) {
        return res.status(401).json({
          success: false,
          error: 'invalid_credentials',
          message: 'E-mail e/ou senha incorreto(s)',
        });
      }

      user.password = undefined;

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 24600,
      });

      return res.json({ success: true, token, user });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error,
        message: 'Erro no servidor',
      });
    }
  },
};
