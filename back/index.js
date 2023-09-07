const {conn} = require('./src/db')
const server = require('./src/app')
require('dotenv').config()
const port = process.env.PORT || 3001;






conn.sync({ alter: true }).then(() => {
    console.log('conexion con db');
    server.listen(port, () => { 
      console.log(`%s listening at ${port}`); // eslint-disable-line no-console
    });
  });