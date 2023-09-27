const jwt = require('jsonwebtoken');
const jwtSecret = process.env.ACCES_TOKEN_SECRET

// Función para crear un token JWT
function createToken(payload) {
    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
}

// Función para verificar un token JWT
function verifyToken(token) {
    return jwt.verify(token, jwtSecret);
}
