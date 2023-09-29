const { User1, User2, User3, User4, Token } = require('../../db')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Para el hashing de contraseñas
const secretKey = process.env.ACCES_TOKEN_SECRET
const refreshTokenSecretKey = process.env.REFRESH_TOKEN_SECRET;




const loginUser = async (usercode, password) => {

    const aux1 = await User1.findAll()
    const aux2 = await User2.findAll()
    const aux3 = await User3.findAll()
    const aux4 = await User4.findAll()
    const data = aux1.concat(aux2, aux3, aux4)

    const user = data.find(u => u.usercode === usercode);

    if (!user) {
        throw new Error('Usuario no encontrado')
    }

    //verificando password
    if (!bcrypt.compareSync(password, user.password)) {
        throw new Error('Contraseña o Email incorrecta')
    }

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ userId: user.id }, refreshTokenSecretKey, { expiresIn: '7d' }); // Puedes ajustar la duración según tus necesidades
    await Token.create({ token: refreshToken })

    const result = {
        info: {
            id: user.id,
            usercode: user.usercode,
            cuit: user.cuit,
            name: user.name,
            address: user.address
        },
        accessToken: token, // El token de acceso
        refreshToken: refreshToken // El token de actualización
    };

    return result;

}

module.exports = loginUser