const { User, Prod, Orders, Review } = require('../../db')

const createOrder = async (codeOrder, userId, prodId) => {
    const user = await User.findByPk(userId);
    const products = await Prod.findAll({ where: { id: prodId } });
    // console.log(userId);
    if (products.length < 1) throw new Error(`No existe producto con codigo "${prodId}"`);
    // if (!user) throw new Error(`No existe usuario con este codigo "${userId}"`);

    const newOrder = await Orders.create({ codeOrder });

    // Asociar el usuario a la orden
    await user.addOrders(newOrder);

    // Asociar los productos a la orden
    await newOrder.addProds(products);

    return "Orden realizada";
}



const getOrder = async () => {
    try {
        let getOrders = await Orders.findAll({
            include: [
                {
                    model: Prod,
                    attributes: ["name", "price", "quanty"],
                    through: {
                        attributes: []
                    }
                }, {
                    model: Review,
                    as: 'ReviewGeneral',
                    attributes: ["review", "id"]
                }, {
                    model: User,
                    attributes: ["name", "email"]
                },
            ]
        });

        if (getOrders.length < 1) {
            throw new Error('Orden inexistente');
        }

        return getOrders;
    } catch (error) {
        throw new Error('No se pudieron obtener las órdenes');
    }
}

const getIdOrders = async (id) => {
    const orderid = await getOrder();

    const idOrder = orderid.filter(el => el.id == id);
    return idOrder;
}


module.exports = {
    createOrder,
    getOrder,
    getIdOrders
};
