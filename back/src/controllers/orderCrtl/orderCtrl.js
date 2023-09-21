const { User1, Prod, Orders, Review } = require( '../../db' )

const createOrder = async ( codeOrder, stimate_date, pay, userId, prodId ) => {
    const user = await User1.findByPk( userId );

    if ( ! user ) 
        throw new Error( `No existe usuario con este codigo "${ userId }"` );
    

    const newOrder = await Orders.create( { codeOrder, stimate_date, pay } );

    // Asociar el usuario a la orden
    await user.addOrders( newOrder );

    const products = await Prod.findAll( {
        where: {
            id: prodId
        }
    } );

    if ( products.length < 1 ) 
        throw new Error( `No existe producto con codigo "${ prodId }"` );
    

    // Asociar los productos a la orden
    await newOrder.addProds( products );

    return "Orden realizada";
}


const getOrder = async () => {
    let getOrders = await Orders.findAll( {
        include: [
            {
                model: Prod,
                attributes: [
                    "name", "price", "quanty"
                ],
                through: {
                    attributes: []
                }
            }, {
                model: Review,
                as: 'ReviewGeneral',
                attributes: [ "review", "id" ]
            }, {
                model: User1,
                attributes: [ "name", "usercode" ]
            },
        ]
    } )
    if ( getOrders.length < 1 ) 
        throw new Error( 'Orden inexistente' )
    
    return getOrders;
}

const getIdOrders = async ( id ) => {

    let OrderDB = await getOrder()

    let idOrder = OrderDB.find( el => el.id == id )

    return idOrder;
}

module.exports = {
    createOrder,
    getOrder,
    getIdOrders
};
