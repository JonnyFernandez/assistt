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


const { Orders, Prod, Review, User, Token } = sequelize.models;
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
User.hasMany(Review, {
  foreignKey: "userReview",
  as: "Review",
});

Review.belongsTo(User, {
  foreignKey: "userReview",
});
//---------------------------------------------------------------


// relacion orden de compra ---> prod
Orders.belongsToMany(Prod, { through: 'ProdOrder' })
Prod.belongsToMany(Orders, { through: 'ProdOrder' })


//---------------------------------------------------------------
User.hasMany(Orders, {           //user
  foreignKey: "userOrder",
  as: "orders",
});

Orders.belongsTo(User, {
  foreignKey: "userOrder",
});
//---------------------------------------------------------------

module.exports = {
  ...sequelize.models,
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};