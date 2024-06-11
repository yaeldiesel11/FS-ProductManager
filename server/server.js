const express = require('express');
const cors = require('cors');
const app = express();

//middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoose
require('./config/mongoose.config');

//routes and app
const ProductRoutes = require('./routes/product.routes')
ProductRoutes(app);

// http://localhost:8080/
app.listen(8080, () => {
    console.log("Listening at port 808")
})