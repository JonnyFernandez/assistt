const {Router} = require('express')
const { getAllUser_1, User1_ById, postUser_1, updateUser_1,  } = require('../handlers/userHandler/user1Handler')
const PostUserValidation1 = require('../handlers/postUserValidation/postUserValidation1')

const user1 = Router()
//USER SALUD

/**
 * @swagger
 * /user1:
 *   get:
 *     summary: Obtiene la lista de usuarios
 *     description: Obtiene la lista de todos los usuarios.
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             example:
 *               usuarios: [{ id: 1, nombre: 'Usuario 1' }, { id: 2, nombre: 'Usuario 2' }]
 */


// /**
//  * @swagger
//  * /user1:
//  *   get:
//  *     summary: Busca usuarios por nombre
//  *     description: Busca usuarios por nombre utilizando un filtro de consulta.
//  *     parameters:
//  *       - in: query
//  *         codeUser: codeUser
//  *         required: false
//  *         description: Filtro por nombre de usuario
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Lista de usuarios que coinciden con el filtro
//  *         content:
//  *           application/json:
//  *             example:
//  *               usuarios: [{ id: 1, nombre: 'Usuario 1' }, { id: 2, nombre: 'Usuario 2' }]
//  */



/**
 * @swagger
 * /user1:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Crea un nuevo usuario con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado con éxito
 *       400:
 *         description: Datos de usuario no válidos
 */

/**
 * @swagger
 * /user1/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     description: Obtiene un usuario por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a obtener
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               nombre: 'Usuario 1'
 *       404:
 *         description: Usuario no encontrado
 */


/**
 * @swagger
 * /user1/{id}:
 *   put:
 *     summary: Actualiza un usuario por su ID
 *     description: Actualiza un usuario por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: integer
 *           format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado con éxito
 *       404:
 *         description: Usuario no encontrado
 */

user1.get('/', getAllUser_1)
user1.get('/:id', User1_ById)
user1.post('/', postUser_1)
user1.post('/login', PostUserValidation1)
user1.put('/:id', updateUser_1)



module.exports = user1