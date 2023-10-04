const jwt = require("jsonwebtoken")

const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.ACCES_TOKEN_SECRET)
}



const verifyRefreshToken = (token) => {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
}

const generateAccessToken = (payload) => {
    return jwt.sign({ payload }, process.env.ACCES_TOKEN_SECRET, { expiresIn: '1h' });
}


module.exports = { verifyAccessToken, verifyRefreshToken, generateAccessToken }