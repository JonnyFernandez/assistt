const { createProd, getProd, update, updateCantidad, updateProduct } = require('../../controllers/ProdCtrl/ProdCtrl')

const postProd = async (req, res) => {
    const { code, image, name, description, supplie_type, stock, price } = req.body;
    try {
        const newProd = await createProd(code, image, name, description, supplie_type, stock, price)
        res.status(201).json(newProd)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllProd = async (req, res) => {
    try {
        const Prod = await getProd()
        res.status(201).json(Prod)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateProd = async (req, res) => {
    const { id } = req.params;
    const { active } = req.body
    try {
        const aux = await update(id, active)
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateQuantity = async (req, res) => {
    const { id } = req.params;
    const { quanty, name, price, image, description, supplie_type, stock } = req.body

    try {
        const cantidad = quanty ? await updateCantidad(id, quanty) : await updateProduct(id, name, price, image, description, supplie_type, stock)
        res.status(201).json(cantidad)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}



module.exports = { postProd, getAllProd, updateProd, updateQuantity }