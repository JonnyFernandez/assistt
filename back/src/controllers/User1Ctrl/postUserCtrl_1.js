const { User1, Entity } = require('../../db')
const bcrypt = require("bcryptjs");
const generateCode = require('../../utils/codeGenerator')




const createUser1 = async (cuit, name, address, email, phone, password, entity) => {
    let usercode = generateCode()

    const EntityDB = await Entity.findAll({ where: { name: entity } })
    // console.log(EntityDB);
    if (EntityDB.length < 1) throw new Error('entidad inexistente')
    
    name = name.toUpperCase();
    address = address.toUpperCase();
    email = email.toLowerCase();

    const userExists = await User1.findOne({ where: { email } });
    if (userExists) throw new Error("Este mail ya esta registrado");
    // if (!userExists) await register(email);       //Nodemailer

    const passwordHash = await bcrypt.hash(password, 10);

    const userData = { usercode, cuit, name, address, email, phone, password: passwordHash, };

    let aux = await User1.create(userData);
     
    await aux.addEntity(EntityDB);





    
    return `Usuario ${usercode} creado`
}



module.exports = createUser1