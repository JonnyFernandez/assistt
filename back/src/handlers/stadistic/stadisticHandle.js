const CountPro = require('../../controllers/stadiscticCtrl/CountProd')

const Count = async (req, res) => {
    try {
        const stadistic = await CountPro()
        res.status(200).json(stadistic)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }

}

module.exports = Count