const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get("", ProductController.allProducts);
    app.get('/api/:id', ProductController.oneProduct);
}