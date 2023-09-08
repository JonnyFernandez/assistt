const {createProd} = require('../controllers/ProdCtrl/ProdCtrl')

const data =[
    {"code":"123", "name":"jonny", "description":"para la diarrea9" },
    {"code":"3456", "name":"jon1", "description":"para la diardasre" },
    {"code":"125", "name":"jon2", "description":"para la diara" },
    {"code":"126", "name":"jon3", "description":"para la diarr3" },
    {"code":"127", "name":"jon4", "description":"para la diarredfsaa" },
    {"code":"128", "name":"jon5", "description":"para la diarredasfa" },
    {"code":"129", "name":"jon6", "description":"para la diarrefdaa" },
    {"code":"110", "name":"jon7", "description":"para la diarredasa" },
    {"code":"111", "name":"jon8", "description":"para la diarrdsaea" },
    {"code":"112", "name":"jon9", "description":"para la diarredasa" },
    {"code":"113", "name":"jon0", "description":"para la diarredasa" },
    {"code":"114", "name":"jon12", "description":"para la diarredasa" },
    {"code":"115", "name":"jon14", "description":"para la diarrdasea" },
]

const ProdToDB = async () => {

    data.forEach(item => {
        createProd(
        item.code,
        item.name,
        item.description,
        )
    });
}
       
module.exports = ProdToDB  