require('express-async-errors');
const express = require('express');
const app = express();
const AppError = require('./utils/AppError');
const router = require('./router');
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(router);
app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('*', (_req, res) => {
    res.json({ msg: 'no route handler found' }).end()
})

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    };

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`index.js listening on ${port}`)
});