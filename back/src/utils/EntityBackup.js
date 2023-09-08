const {Entity}=require('../db')

const data = [
    "Laboratorio",
    "Hospital",
    "Sanatorio",
    "Laboratotio",
    "Salita",
    "Obra Social"
]


const postEntity = async() => {

    data.forEach(item => {
        Entity.findOrCreate({ where: { name: item } })
    });
     console.log("entidad cargada desde utils");
}
module.exports = postEntity
