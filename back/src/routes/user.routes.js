const { Router } = require('express')
const { getAllUsers, getUserById, modifyUser, bannedUser } = require('../handlers/userHandler/userHandler')
const multer = require('multer');


const user = Router()

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// , upload.single('image')


user.get('/', getAllUsers)
user.put('/banned/:id', bannedUser);
user.get('/:id', getUserById)
user.put('/:id', modifyUser)


module.exports = user