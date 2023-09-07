const { User1 } = require('../../db')
const bcrypt = require("bcryptjs");






const createUser1 = async (cuit, name, address, email, phone, password) => {
    let usercode = "P0010"
   
    name = name.toUpperCase();
    address = address.toUpperCase();
    email = email.toLowerCase();
   
    const userExists = await User1.findOne({ where: { email } });
    if (userExists) throw new Error("El usuario ya existe");
    // if (!userExists) await register(email);       //Nodemailer
   
    const passwordHash = await bcrypt.hash(password, 10);

    const userData = { usercode, cuit, name, address, email, phone, password: passwordHash,};
    
    await User1.create(userData);



    
    // const aux = await User1.create({ usercode, cuit, name, address, email, phone, password })
    return `Usuario ${usercode} creado`
}



module.exports = createUser1