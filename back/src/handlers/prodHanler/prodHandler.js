const {createProd, getProd, update} = require('../../controllers/ProdCtrl/ProdCtrl')

const postProd = async(req, res) => {
    const { code, name, description } = req.body;
    try {
        const newProd = await createProd(code, name, description)
        res.status(201).json(newProd)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAllProd = async (req, res) => {
    try {
        const Prod = await getProd()
        res.status(201).json(Prod)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
 }

const updateProd = async (req, res) => {
    const {id} = req.params;
    const {active} = req.body
    try {
        const aux = await update(id, active)
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
 }



module.exports = { postProd, getAllProd, updateProd }