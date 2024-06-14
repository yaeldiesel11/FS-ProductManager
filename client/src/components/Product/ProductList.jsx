import React from 'react'
import { Link } from 'react-router-dom'
import ProductDelete from "./ProductDelete"

const ProductList = ({ products = [], deleteProduct }) => {
    return (
        <div>
            <h2>List of Products</h2>

            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                products.map((product) => {
                    console.log(product._id)
                    return <div key={product._id}>
                        <Link to={`/api/${product._id}`}>{product.title}</Link>
                        <Link to={`/api/${product._id}/edit`}>
                            <button> Update </button>
                        </Link>
                        <ProductDelete id={product._id} deleteProduct={deleteProduct} />
                    </div>
                })
            )}
        </div>
    )
}

export default ProductList;