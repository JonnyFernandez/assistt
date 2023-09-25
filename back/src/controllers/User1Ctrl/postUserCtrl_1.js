// const { User1, Entity } = require('../../db')
// const bcrypt = require("bcryptjs");
// const { generateCode } = require('../../utils/codeGenerator')


// const createUser1 = async (name, email, password, entity ) => {
//     let usercode = generateCode()

//     const EntityDB = await Entity.findAll({ where: { name: entity } })
//     // console.log(EntityDB);
//     if (EntityDB.length < 1) throw new Error('entidad inexistente')
    
//     name = name.toUpperCase();
//     //address = address.toUpperCase();
//     email = email.toLowerCase();

//     const userExists = await User1.findOne({ where: { email } });
//     if (userExists) throw new Error("Este mail ya esta registrado");
//     // if (!userExists) await register(email);       //Nodemailer

//     const passwordHash = await bcrypt.hash(password, 10);

//     const userData = { name, email, password: passwordHash, };

//     let aux = await User1.create(userData);
     
//     await aux.addEntity(EntityDB);


 
//     return `Usuario ${usercode} creado`
// }



// module.exports = createUser1

const { User1, Entity } = require('../../db');
const bcrypt = require("bcryptjs");
//const { generateCode } = require('../../utils/codeGenerator');

const createUser1 = async (name, email, password, entity) => {
  try {
    // Buscar la entidad en la base de datos
    const EntityDB = await Entity.findOne({ where: { name: entity } });

    if (!EntityDB) {
      // Si no se encuentra la entidad, lanzar un error con un mensaje descriptivo
      throw new Error(`La entidad "${entity}" no existe en la base de datos`);
    }

    name = name.toUpperCase();
    email = email.toLowerCase();

    const userExists = await User1.findOne({ where: { email } });
    if (userExists) throw new Error("Este correo electrónico ya está registrado");

    const passwordHash = await bcrypt.hash(password, 10);
    const userData = { name, email, password: passwordHash };

    console.log("Entrando en postUser_1");
    const newUser1 = await User1.create(userData);
    console.log("Usuario creado:", newUser1);

    // Asociar al usuario con la entidad encontrada
    await newUser1.addEntity(EntityDB);

    return `Usuario creado`;
  } catch (error) {
    // Capturar el error y enviar una respuesta de error al cliente
    return { error: error.message };
  }
};


module.exports = createUser1;

