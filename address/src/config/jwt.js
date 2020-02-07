const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next){
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (!token) {
    return res
      .status(401)
      .json({ 
        success: false, 
        error: 'token_not_provided', 
        message: 'Token não enviado' 
      });
  }

  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) {
      return res
        .status(401)
        .json({
          success: false,
          error: 'authentication_failed',
          message: 'Falha ao autenticar token',
        });
    }
    
    req.userId = decoded.id;
    next();
  });
}

module.exports = { verifyJWT };