const getTokenHeader = require("./getTokenFromHeader")
const { verifyAccessToken } = require("./verifyToken")


const authenticate = (req, res, next) => {
    const token = getTokenHeader(req.headers)

    if (token) {
        const decoded = verifyAccessToken(token)
        if (decoded) {
            req.user = { ...decoded.user }
            next()
        } else {
            res.status(400).send('No token provided')

        }

    } else {
        res.status(400).send('No token provided')
    }
}

module.exports = authenticate