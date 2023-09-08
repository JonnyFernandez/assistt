

const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'API AssisttOne',
      version: '1.0.0',
      description: 'Documentación de la API de Tu Aplicación',
    },
  },
  apis: ['src/routes/user1.routes.js'], // Rutas donde se encuentra la documentación de Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

