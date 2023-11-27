const { User, Token } = require('../../db')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Para el hashing de contraseñas
const secretKey = process.env.ACCES_TOKEN_SECRET
const refreshTokenSecretKey = process.env.REFRESH_TOKEN_SECRET;


const loginUser = async (email, password) => {
    console.log(email);
    console.log(password);

    const userDB = await User.findAll()


    const user = await userDB.find(u => u.email === email);
    console.log(user);

    if (!user) {
        throw new Error('Usuario Inexistente')
    };

    if (!user.active) {
        throw new Error('Usuario Desactivado!');
    }

    //verificando password
    if (!bcrypt.compareSync(password, user.password)) {
        throw new Error('Contraseña o Email incorrecta')
    }

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ userId: user.id }, refreshTokenSecretKey, { expiresIn: '7d' }); 
    await Token.create({ token: refreshToken })

    const result = {

        body: {
            id: user.id,
            name: user.name,
            email: user.email,
            type: user.type,
        },

        accessToken: token, 
        refreshToken: refreshToken 
    };



    return result;

}

module.exports = loginUser