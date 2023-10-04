const { Router } = require('express')
const getTokenHeader = require('../utils/auth/getTokenFromHeader')
const { verifyAccessToken } = require('../utils/auth/verifyToken')
const { Token } = require('../db')

const refresh_token = Router()

refresh_token.post('/', async (req, res) => {
    const refreshToken = getTokenHeader(req.headers)
    try {
        if (refreshToken) {
            const found = await Token.findOne({ token: refreshToken })
            if (!found) { return res.status(400).send('no autorizado') }
            if (found) {
                const payload = verifyAccessToken(found.token)

                if (payload) {
                    const accessToken = generateAccessToken(payload.user)
                    res.status(200).json(accessToken)
                } else {
                    res.status(400).send('no esta autorizado')
                }

            }
        } else {
            res.status(400).send('ingresar token')
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})




module.exports = refresh_token