const createUser = require('../controllers/signupCtrl/signupCtrl')

const data = [
    { "name": "Andrea Buldori", "email": "admin@gmail.com",  "company": "Telefónica", "address": "Buenos Aires 568",  "phone": "3416784389", "password": "123", "type": "admin" },
    { "name": "Jonny Fernandez", "email": "client@gmail.com", "password": "123", "type": "client" },
    { "name": "supplier", "email": "supplier@gmail.com", "password": "123", "type": "supplier" },
]


const userToDB = () => {
    data.forEach(item => {
        createUser(item.name, item.email, item.password, item.type)
    });
}




























module.exports = userToDB;