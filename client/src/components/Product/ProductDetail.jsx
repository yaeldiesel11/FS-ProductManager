import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ProductDelete from "./ProductDelete"

const ProductDetail = ({ deleteProduct }) => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/' + id)
            .then((res) => {
                setProduct({ ...res.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="productdetail">
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/api/${id}/edit`}>
                <button> Update product </button>
            </Link>
            <Link to="/">
                <ProductDelete id={id} deleteProduct={deleteProduct} />
            </Link>
        </div>
    )
}

export default ProductDetail;