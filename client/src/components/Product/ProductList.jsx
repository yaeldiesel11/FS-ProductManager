import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products = [] }) => {
    return (
        <div>
            <h2>List of Products</h2>

            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                products.map((product) => (
                    <div key={product._id}>
                        <Link to={`/api/${product._id}`}>{product.title}</Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductList;