const {createEntity, deleteEntity, getEntities} = require('../../controllers/entityCtrl/entityCtrl')

const postEntity = async (req, res) => {
    let {name} = req.body;
    // console.log(name);
    try {
        const aux = await createEntity(name)
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const removeEntity = async(req, res) => {
    const {id} = req.params;
    try {
        const remove = await deleteEntity(id)
        res.status(201).json(remove)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
 }

const getAllEntity =async(req, res)=>{
    try {
        const aux = await getEntities()
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { postEntity, removeEntity, getAllEntity }
