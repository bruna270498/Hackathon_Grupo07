const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: 'Hackathon 1000Devs by Mesttra(Grupo 07)',
    description: 'API para carteira digital de vacinação',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

// criar a pasta "swagger" manualmente na raiz do projeto
const outputFile = "swagger_output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);