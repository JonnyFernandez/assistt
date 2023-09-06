const { getAllUser4, getByName4 } = require( '../../controllers/User4Ctrl/getAllUserCtrl_4' )
const getUserById_4 = require( '../../controllers/User4Ctrl/userByIdCtrl_4' )
const createUser4 = require( '../../controllers/User4Ctrl/postUserCtrl_4' )
const update4 = require( '../../controllers/User4Ctrl/updateUserCtrl_4' )

const getAllUser_4 = ( req, res ) => {
    const { name } = req.query;
    try {
        const getUser4 = name ? getByName4( name ) : getAllUser4()
        res.status( 200 ).json( getUser4 )
    } catch ( error ) {
        res.status( 400 ).json( { error: error.message } )
    }
}

const User4_ById = ( req, res ) => {
    const { id } = req.params;
    try {
        const userById4 = getUserById_4( id )
        res.status( 200 ).json( userById4 )
    } catch ( error ) {
        res.status( 400 ).json( { error: error.message } )
    }
}

const postUser_4 = ( req, res ) => {
    const { name } = req.body;
    try {
        const newUser4 = createUser4( name )
        res.status( 201 ).json( newUser4 )
    } catch ( error ) {
        res.status( 400 ).json( { error: error.message } )
    }
}

const updateUser_4 = ( req, res ) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updateUser4 = update4( id, name )
        res.status( 201 ).json( updateUser4 )
    } catch ( error ) {
        res.status( 400 ).json( { error: error.message } )
    }
}

module.exports = {
    getAllUser_4,
    User4_ById,
    postUser_4,
    updateUser_4
}
