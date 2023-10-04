const { User, Review, Orders } = require('../../db')
const { Op } = require('sequelize')

const getAll = async () => {
    const aux = await User.findAll({
        include: [

            {
                model: Review,
                as: 'Review',
                attributes: ["review"]
            },
            {
                model: Orders,
                as: 'orders',
                attributes: ["codeOrder", "monto"]
            },
        ],
        attributes: { exclude: ['password'] }
    })
    if (aux.length < 1) throw new Error('No users in DB')
    return aux
}


const getByName = async (name) => {
    const aux = await User.findAll({
        where: {
            name: {
                [Op.iLike]: "%" + name + "%"
            }
        },
        include: [

            {
                model: Review,
                as: 'Review',
                attributes: ["review"]
            },
            {
                model: Orders,
                as: 'orders',
                attributes: ["codeOrder", "monto"]
            },
        ]
    });
    return aux
}


const getById = async (id) => {
    const info = await getAll()
    const aux = info.find(item => item.id === id)
    if (!aux) throw new Error('No user with this ID')
    return aux
}


const modify = (id, name) => { }


const banned = (id, active) => { }




module.exports = { getByName, getAll, getById, modify, banned }