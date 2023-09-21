const getAllUser1 = require("./getAllUserCtrl_1");
const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

const getUserValidation1 = async ({ email, password }) => {
  const dataUsers = await getAllUser1();

  const userFound = dataUsers.find((user) => user.email === email);
  if (!userFound) throw new Error("El usuario no está registrado");

  const comparePassword = await bcrypt.compare(password, userFound.password);
  if (!comparePassword) throw new Error("Contraseña incorrecta");

  // const token = jwt.sign(
  //   {
  //     id: userFound.id,
  //     name: userFound.name,
  //   },
  //   process.env.JWT_SECRET,
  //   {
  //     expiresIn: "12h",
  //   }
  // );

  // const user1 = {
  //   id: userFound.id,
  //   usercode: userFound.usercode,
  //   cuit: userFound.cuit,
  //   name: userFound.name,
  //   address: userFound.address,
  //   email: userFound.email,
  //   phone: userFound.phone,
  //   password: userFound.password,
  //   //token
  // }

  // return user1;
};

module.exports = getUserValidation1;

