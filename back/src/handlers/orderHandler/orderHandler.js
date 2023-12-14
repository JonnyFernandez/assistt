const { createOrder, getOrder, getIdOrders, orderUpdate, OrdersUserById, setPauseOrder, acceptOrder, finisOrder, aprov_Quote } = require('../../controllers/orderCrtl/orderCtrl')
// const generateRandomCode = require('../../utils/generateRandomCode')

const postOrder = async (req, res) => {

  const { codeOrder, userId, prodId } = req.body;

  try {
    const aux = await createOrder(codeOrder, userId, prodId);
    res.status(201).json(aux);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllOrder = async (req, res) => {
  try {
    const aux = await getOrder()
    res.status(201).json(aux)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getByIdOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const getAllIdOrder = await getIdOrders(id)
    res.status(200).json(getAllIdOrder)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { aprobado, userEmail, quotes, amout } = req.body;
    console.log(aprobado);
    const Update = aprobado === true || aprobado === false ? await orderUpdate(id, aprobado) : userEmail ? await acceptOrder(id, userEmail) : amout ? await finisOrder(id, amout) : quotes === false || quotes === true ? await aprov_Quote(id, quotes) : ''

    res.status(200).json(Update)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getOrdersByIdUser = async (req, res) => {
  try {
    const { id } = req.params;

    const getAllOrdersOfUser = await OrdersUserById(id)
    res.status(200).json(getAllOrdersOfUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const setPause = async (req, res) => {
  try {
    const { id } = req.params;
    const { pause } = req.body;
    const aux5 = await setPauseOrder(id, pause)
    res.status(200).json(aux5)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


module.exports = { postOrder, getAllOrder, getByIdOrder, updateOrder, getOrdersByIdUser, setPause }

