const { request } = require('express')
const Product = require('./../models/product.model')

const handleError = (res, error) => {
    return res
        .status(500)
        .json({ message: 'Something went wrong', error })
};

module.exports = {
    //show all products
    allProducts: (req, res) => {
        return Product
            .find()
            .then((products) => {
                console.log(products)
                return res
                    .status(200)
                    .json(products)
            })
            .catch((error) => {
                handleError(res, error)
            })
    },
    //show a product detail
    oneProduct: (req, res) => {
        return Product
            .findOne({ _id: req.params.id })
            .then((product) => {
                return res
                    .status(200)
                    .json(product)
            })
            .catch((error) => {
                handleError(res, error)
            })
    },
    //adding a new product
    addProduct: (req, res) => {
        const { title, price, description } = req.body

        if (title === '') {
            return res.status(406).json({ message: "Please fill in all required fields" });
            // } else if (!title || title === "") {
            //     return res.json({ message: "A title is required" })
            // } else if (!price || price === "") {
            //     return res.json({ message: "A price is required" })
            // } else if (!description || description === "") {
            //     return res.json({ message: "A description is required" })
            // } else if (price < 0) {
            //     return res.json({ message: "Price must be a valid number" })
        }

        const newProduct = {
            title: title,
            price: price,
            description: description
        };

        return Product
            .create(newProduct)
            .then((product) => res
                .status(201)
                .json({ message: "Product added: ", product }))
            .catch((error) => {
                handleError(res, error)
            })
    },

    //update product
    updateProduct: (req, res) => {
        return Product
            .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((producto) => {
                return res
                    .status(200)
                    .json({ message: "Product updated: ", producto })
            })
            .catch((error) => {
                handleError(res, error)
            })
    },
    //delete a product
    deleteProduct: (req, res) => {
        return Product
            .findByIdAndDelete({ _id: req.params.id })
            .then((deletedProduct) => {
                return res
                    .status(204)
                    .end()
            })
            .catch((error) => {
                handleError(res, error)
            })
    }
}