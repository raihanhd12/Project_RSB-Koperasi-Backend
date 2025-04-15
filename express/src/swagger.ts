const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Koperasi Backend API",
    description: "Documentation for Koperasi Backend API",
  },
  host: "localhost:3000",
};

const outputFile = "";
const routes = ["./main.ts"];

swaggerAutogen(outputFile, routes, doc).then(() => {
  require("./main.ts");
});
