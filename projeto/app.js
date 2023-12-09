const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(router);


// showVacinasCount();
// Catch all handler for all other request.
app.use('*', (req, res) => {
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

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`index.js listening on ${port}`)
})