const { conn } = require('./src/db')
const server = require('./src/app')
const ProdToDB = require('./src/utils/ProdBackup')
const userToDB = require('./src/utils/createUsers')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./src/routes/swagger');


require('dotenv').config()
const port = process.env.PORT || 3001;



server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


conn.sync({ force: true }).then(() => {
  console.log('conexion con db');
  ProdToDB()
  userToDB()
  server.listen(port, () => { console.log(`%s listening at ${port}`); });
  console.log(`Swagger at Url http://localhost:${port}/api-docs/`);
})
// ------