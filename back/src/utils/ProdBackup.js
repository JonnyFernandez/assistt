const { createProd } = require('../controllers/ProdCtrl/ProdCtrl')

const data = [
    { "code": "1235", "name": "K-kaution", "description": "Cepillo Endocervical Esteril Descartable", "supplie_type": "almacen" },
    { "code": "127", "name": "Barbijo", "description": "Barbijo Para Niños Con Elástico Y Clip Nasal 50u Pediátrico", "supplie_type": "libreria" },
    { "code": "3456", "name": "OXÍMETRO DE PULSO", "description": "Oximetro De Pulso Saturometro Con Curva Y Pi. Aprobado Anmat", "supplie_type": "medico" },
    { "code": "125", "name": "Reservorio Adulto ", "description": "Bolsa Reservorio Ambu Repuesto Adulto 2000ml", "supplie_type": "limpieza" },
    { "code": "126", "name": "", "description": "para la diarr3", "supplie_type": "otros" },

    { "code": "128", "name": "Barbijo Con Válvula", "description": "Barbijo 3m Mascarilla Con Válvula 8511 N95 Caja 10 Unidades", "supplie_type": "almacen" },
    { "code": "129", "name": "Tapon Para Sonda Foley Vesical", "description": "Tapon Para Sonda Foley Vesical", "supplie_type": "medico" },
    { "code": "110", "name": "Tensiómetro Digital", "description": "Tensiómetro Digital Maverick YE650D con Voz", "supplie_type": "otros" },
    { "code": "111", "name": "Almohadilla Plantar Grande", "description": "Almohadilla Plantar Grande", "supplie_type": "otros" },
    { "code": "112", "name": "Andador 4 Ruedas", "description": "Andador 4 Ruedas Doble Función 425", "supplie_type": "limpieza" },
    { "code": "113", "name": "Andador Paso A Paso", "description": "Andador Paso A Paso Regulable Aluminio / A17", "supplie_type": "limpieza" },
    { "code": "114", "name": "Rodillera Abierta ", "description": "Rodillera Abierta Corta R7", "supplie_type": "libreria" },
    { "code": "115", "name": "Faja Flexband", "description": "Faja Flexband 3 Y 4 Bandas Regulable 3300 Y 3400", "supplie_type": "libreria" },
]

const ProdToDB = async () => {

    data.forEach(item => {
        createProd(
            item.code,
            item.name,
            item.description,
            item.supplie_type,
        )
    });
}

module.exports = ProdToDB  