const { createProd, getProd, update, updateCantidad } = require('../../controllers/ProdCtrl/ProdCtrl')

const postProd = async (req, res) => {
    const { code, name, description, supplie_type } = req.body;
    try {
        const newProd = await createProd(code, name, description, supplie_type)
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
    const { quanty } = req.body
    console.log(id);
    try {
        const cantidad = await updateCantidad(id, quanty)
        res.status(201).json(cantidad)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}



module.exports = { postProd, getAllProd, updateProd, updateQuantity }