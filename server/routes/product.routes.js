const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get("", ProductController.allProducts)
    app.get('/api/:id', ProductController.oneProduct)
    app.post('/api/add', ProductController.addProduct)
    app.put('/api/:id/edit', ProductController.updateProduct)
    app.delete('/api/:id/delete', ProductController.deleteProduct)
}