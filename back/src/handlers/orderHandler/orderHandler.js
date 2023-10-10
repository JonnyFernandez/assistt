const { createOrder, getOrder, getIdOrders } = require('../../controllers/orderCrtl/orderCtrl')
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


module.exports = { postOrder, getAllOrder, getByIdOrder }

