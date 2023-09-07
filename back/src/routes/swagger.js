// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express')
// // require('dotenv').config()
// // const port = process.env.PORT || 3001;


// //meta data info about api

// const options = {
//     definition:{
//         openapi:"3.0.0",
//         info:{title:"pepe API", version: '1.0.0'},

//     },
//     //aca van los end point
//     apis:['src/routes/swagger.js']
// };

// //ponemos la documentacion en formato json
// const swaggerSpec = swaggerJSDoc(options);
// //funcion para el setup our docs

// const swaggerDocs = (app, port)=>{
//     app.use('/user1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//     app.use('/user2/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//     app.use('/user3/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//     app.use('/user4/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//     // app.get('/user1/docs.json', (req,res)=>{
//     //     res.setHeader('Content-type', 'application/json');
//     //     res.send(swaggerSpec)
//     // });
//   console.log(`📄 version 1 Docs are available at http://localhost:${port}/user1/`);
//   console.log(`📄 version 1 Docs are available at http://localhost:${port}/user2/`);
//   console.log(`📄 version 1 Docs are available at http://localhost:${port}/user3/`);
//   console.log(`📄 version 1 Docs are available at http://localhost:${port}/user4/`);
// }


// module.exports = {swaggerDocs}

const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'API de Tu Aplicación',
      version: '1.0.0',
      description: 'Documentación de la API de Tu Aplicación',
    },
  },
  apis: ['src/routes/user1.routes.js'], // Rutas donde se encuentra la documentación de Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

