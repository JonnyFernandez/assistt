const { getAllUser3, getByName3 } = require( '../../controllers/User3Ctrl/getAllUserCtrl_3' )
const getUserById_3 = require( '../../controllers/User3Ctrl/getUserById_3' )
const createUser3 = require( '../../controllers/User3Ctrl/postUserCtrl_3' )
const update3 = require('../../controllers/User3Ctrl/updateUserCtrl_3')

const getAllUser_3 = ( req, res ) => {
    const { name } = req.query;
    try {
        const aux3 = name ? getByName3( name ) : getAllUser3()
        res.status( 200 ).json( aux3 )
    } catch ( error ) {
        res.status( 400 ).json( { error: error.message } )
    }

}

const User3_ById = ( req, res ) => {
    const { id } = req.params;
    try {
        const byId3 = getUserById_3( id )
        res.status( 200 ).json( byId3 )
    } catch ( error ) {
        res.status( 400 ).json( { error: error.message } )
    }
}

const postUser_3 = ( req, res ) => {
    const { name } = req.body;
    try {
        const newUser3 = createUser3( name )
        res.status( 201 ).json( newUser3 )
    } catch ( error ) {
        res.status( 400 ).json( { error: error.message } )
    }
}

const updateUser_3 = ( req, res ) => {
    const { name } = req.body;
    const { id } = req.params;
    try {
        const updateUser3 = update3( id, name )
        res.status( 201 ).json( updateUser3 )
    } catch ( error ) {
        res.status( 400 ).json( { error: error.message } )
    }
}

module.exports = {
    getAllUser_3,
    User3_ById,
    postUser_3,
    updateUser_3
}
