require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false,
  native: false,
});



const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { Entity, Orders, Prod, Review, User1, User2, User3, User4 } = sequelize.models;
// console.log(sequelize.models);

//--------------------Relaciones----------------------------------
Orders.hasMany(Review, {           //TODOS LOS USER
  foreignKey: "ordersReviewID",
  as: "ReviewGeneral",
});

Review.belongsTo(Orders, {
  foreignKey: "ordersReviewID",
});
//---------------------------------------------------------------

//relacion usuario - > reseña
User1.hasMany(Review, {           //user1
  foreignKey: "user1Review",
  as: "Review1",
});

Review.belongsTo(User1, {
  foreignKey: "user1Review",
});
//-----------------------------------------------------------------
User2.hasMany(Review, {            //user2
  foreignKey: "user2Review",
  as: "Review2",
});

Review.belongsTo(User2, {
  foreignKey: "user2Review",
});
//-----------------------------------------------------------------
User3.hasMany(Review, {          //user3
  foreignKey: "user3Review",
  as: "Review3",
});

Review.belongsTo(User3, {
  foreignKey: "user3Review",
});
//-----------------------------------------------------------------
User4.hasMany(Review, {          //user4
  foreignKey: "user4Review",
  as: "Review4",
});

Review.belongsTo(User4, {
  foreignKey: "user4Review",
});
//-----------------------------------------------------------------



// relacion orden de compra ---> prod

Orders.belongsToMany(Prod, { through: 'ProdOrder' })
Prod.belongsToMany(Orders, { through: 'ProdOrder' })

//----------------------------------------------------------------


//------------------------- relacion usuario1 con endidad---------------
//                                    user1

User1.belongsToMany(Entity, { through: 'UserEntity' })
Entity.belongsToMany(User1, { through: 'UserEntity' })
//-------------------relacion usuario1 con order------------------------

User1.hasMany(Orders, {           //user1
  foreignKey: "userOrder",
  as: "Orders",
});

Orders.belongsTo(User1, {
  foreignKey: "userOrder",
});
//------------------------------------------------------------------
// User2.hasMany(Orders, {           //user2
//   foreignKey: "userOrder",
//   as: "Orders",
// });

// Orders.belongsTo(User2, {
//   foreignKey: "userOrder",
// });

//---------------------------------USER 3---------------------------------




















module.exports = {
  ...sequelize.models,
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};