const { User2, Review } = require( '../../db' )


const getAllUser2 = async () => {
    const aux = await User2.findAll( {
        include: [
            {
                model: Review,
                as: 'Review2',
                attributes: [ "review" ]
            }
        ]

    } )
    return aux;
}


const getByName2 = async ( codeUser ) => {
    const get2 = await User2.findAll( {
        where: {
            usercode: codeUser
        },
        include: [
            {
                model: Review,
                as: 'Review2',
                attributes: [ "review" ]
            },
        ]
    } )
    return get2;

}


module.exports = {
    getAllUser2,
    getByName2
}
