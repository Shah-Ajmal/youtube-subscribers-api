import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "YouTube Subscribers API",
      version: "1.0.0",
      description: "API documentation for Get YouTube Subscribers Project",
    },
    servers: [
      {
        url: "http://localhost:3000", // ✅ Correct base URL
      },
    ],
  },
  apis: ["./src/app.js"], // or wherever your route docs live
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
