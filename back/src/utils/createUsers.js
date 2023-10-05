const createUser = require('../controllers/signupCtrl/signupCtrl')

const data = [
    { "name": "Andrea Buldori", "email": "admin@gmail.com", "password": "123", "type": "admin" },
    { "name": "client", "email": "client@gmail.com", "password": "123", "type": "client" },
    { "name": "supplier", "email": "supplier@gmail.com", "password": "123", "type": "supplier" },
]


const userToDB = () => {
    data.forEach(item => {
        createUser(item.name, item.email, item.password, item.type)
    });
}

module.exports = userToDB;






