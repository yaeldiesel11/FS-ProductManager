import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
    const [product, setProduct] = useState({})
    let { id } = useParams()

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
        </div>
    )
}

export default ProductDetail;