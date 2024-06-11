const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/products', ProductController.allProducts);
    app.post('/api/add/product', ProductController.addProduct);
}