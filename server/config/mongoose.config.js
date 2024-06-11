const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/prodmandb')
    .then(() => {
        console.log("Successfully connected to database.")
    })
    .catch((error) => {
        console.log(`Something went wrong: ${error}`)
    })