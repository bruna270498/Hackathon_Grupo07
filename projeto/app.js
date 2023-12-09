const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', router);

// Catch all handler for all other request.
app.use('*', (_req, res) => {
    res.json({ msg: 'no route handler found' }).end()
})

// // Start the server
// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`index.js listening on ${port}`)
// })