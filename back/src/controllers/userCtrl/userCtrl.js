const { User, Review, Orders } = require('../../db')
const { Op } = require('sequelize')

// const { uploadImage } = require('../../utils/cloudinary/Cloudinary')

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


const modify = async (id, company, address, phone, image) => {

    const user = await User.findByPk(id)
    if (!user) throw new Error('No estas registrado')


    image ? user.image = image : user.image
    company ? user.company = company : user.company;
    address ? user.address = address : user.address;
    phone ? user.phone = phone : user.phone;

    await user.save()

    return "Informacion agregada"

}

const banned = async (id, active) => {
    const userBanned = await User.findByPk(id);
    console.log('User found:', userBanned);

    userBanned.active = active;
    await userBanned.save();

    let aux = active === true ? `Activaste el user ${userBanned.name}` : `Baneaste el user ${userBanned.name}`;
    console.log('Response:', aux);

    return aux;
}


module.exports = { getByName, getAll, getById, modify, banned }