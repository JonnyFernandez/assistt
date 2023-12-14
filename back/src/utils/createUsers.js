const createUser = require('../controllers/signupCtrl/signupCtrl')

const data = [
    { "name": "Andrea Buldori", "email": "admin@gmail.com", "company": "Telefónica", "address": "Buenos Aires 568", "phone": "3416784389", "password": "123", "type": "admin" },

    { "name": "Jonny Fernandez01", "email": "client01@gmail.com", "password": "123", "type": "client" },
    { "name": "Jonny Fernandez02", "email": "client02@gmail.com", "password": "123", "type": "client" },
    { "name": "Jonny Fernandez03", "email": "client03@gmail.com", "password": "123", "type": "client" },
    { "name": "Jonny Fernandez04", "email": "client04@gmail.com", "password": "123", "type": "client" },


    { "name": "supplier01", "email": "supplier01@gmail.com", "password": "123", "type": "supplier" },
    { "name": "supplier02", "email": "supplier02@gmail.com", "password": "123", "type": "supplier" },
    { "name": "supplier03", "email": "supplier03@gmail.com", "password": "123", "type": "supplier" },
    { "name": "supplier04", "email": "supplier04@gmail.com", "password": "123", "type": "supplier" },
    { "name": "supplier05", "email": "supplier05@gmail.com", "password": "123", "type": "supplier" },
]


const userToDB = () => {
    data.forEach(item => {
        createUser(item.name, item.email, item.password, item.type)
    });
}




























module.exports = userToDB;