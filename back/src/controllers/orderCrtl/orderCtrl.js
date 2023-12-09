const { errors } = require('pg-promise');
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
};



const getOrder = async () => {
    try {
        let getOrders = await Orders.findAll({
            include: [
                {
                    model: Prod,
                    attributes: ["name", "price", "quanty", "supplie_type", "code"],
                    through: {
                        attributes: []
                    }
                }, {
                    model: Review,
                    as: 'ReviewGeneral',
                    attributes: ["review", "id"]
                }, {
                    model: User,
                    attributes: ["name", "email", "company", "address", "phone"]
                },
            ]
        });

        if (getOrders.length < 1) {
            throw new Error('Orden inexistente');
        }

        return getOrders;
    } catch (error) {
        throw new Error('Empty Orders DataBase');
    }
};

const getIdOrders = async (id) => {
    const orderid = await getOrder();
    // console.log(id);
    const idOrder = orderid.filter(el => el.id == id);
    return idOrder;
}

const orderUpdate = async (id, aprobado) => {
    const order = await Orders.findByPk(id);

    if (!order) {
        throw new Error(`No hay orden con id: ${id} para aprobar`)
    }

    // Actualiza la propiedad "aprobado" de la orden
    order.aprobado = aprobado;
    await order.save();
}

const OrdersUserById = async (id) => {
    const orderDB = await getOrder()

    const user = await User.findByPk(id)

    if (!user) throw new Error('You must be registered to make this request')

    let aux = await orderDB.filter(item => item.userOrder === id)
    if (aux.length === 0) throw new Error('this user has not placed Orders yet')

    const data = aux.map(item => ({
        id: item.id,
        order_date: item.order_date.toString().slice(4, 15),
        codeOrder: item.codeOrder,
        monto: item.monto,
        aprobado: item.aprobado,
        revisor1: item.revisor1,
        active: item.active,
        providerCode: item.providerCode,
        userOrder: item.userOrder,
        Prods: item.Prods,
        ReviewGeneral: item.ReviewGeneral,
        User: item.User
    }))


    // console.log(aux);
    return data

}

const setPauseOrder = async (id, pause) => {
    const order = await Orders.findByPk(id);
    let message = '';

    if (pause === 'delete') {
        order.active = false;
        message = `Orden ${order.codeOrder} eliminada`;
    } else if (pause === 'activeOrder') {
        order.active = true;
        message = `Orden ${order.codeOrder} Reanudada`;
    } else if (pause === 'pause') {
        order.revisor1 = false;
        message = `Orden ${order.codeOrder} Desactivada`;
    } else if (pause === 'resume') {
        order.revisor1 = true;
        message = `Orden ${order.codeOrder} Activada`;
    } else {
        console.log("hola");
    }

    await order.save();
    return message;
};

const acceptOrder = async (id, userEmail) => {


    const orderAccept = await Orders.findByPk(id)
    if (!orderAccept) throw new Error('Orden no encontrada')
    orderAccept.providerCode = userEmail
    await orderAccept.save()
    return orderAccept
}


const finisOrder = async (id, amout) => {
    const Order = await Orders.findByPk(id)
    if (amout === 'cancelar') {
        Order.monto = null
        Order.providerCode = null
        // Order.aprobado = null
        Order.dispatching = false
        Order.save()
        return Order

    } else {
        Order.monto = amout
        Order.dispatching = true
        Order.save()
        return Order
    }
}

const aprov_Quote = async (id, quotes) => {

    const OrderByAdmin = await Orders.findByPk(id)

    if (quotes === false) {
        OrderByAdmin.quotes = null
        OrderByAdmin.providerCode = null
        OrderByAdmin.save()
        return OrderByAdmin
    }


    if (quotes === true) {
        OrderByAdmin.quotes = quotes
        OrderByAdmin.save()
        return OrderByAdmin
    }





}









module.exports = {
    createOrder,
    getOrder,
    getIdOrders,
    orderUpdate,
    OrdersUserById,
    setPauseOrder,
    acceptOrder,
    finisOrder,
    aprov_Quote
};
