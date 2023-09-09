const {createOrder, getOrder} = require('../../controllers/orderCrtl/orderCtrl')

const postOrder = async (req, res) => {
    let { codeOrder, stimate_date, pay, userId, prodId } = req.body;

    try {
        const aux = await createOrder(codeOrder, stimate_date, pay, userId, prodId )
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// const removeOrder = async (req, res) => {
//     const {id} = req.params;
//     try {
//         const remove = await deletOrder(id)
//         res.status(201).json(remove)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

const getAllOrder = async(req, res) => {
    try {
        const aux = await getOrder()
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {postOrder, getAllOrder}

