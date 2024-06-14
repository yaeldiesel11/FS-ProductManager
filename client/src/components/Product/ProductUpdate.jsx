import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const ProductUpdate = ({ updateProduct }) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [oldProduct, setOldProduct] = useState({})
    const params = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/${params.id}`)
            .then((res) => {
                const { title, price, description } = res.data
                setTitle(title)
                setPrice(price)
                setDescription(description)
            })
            .catch((error) => {
                console.log('Something wrong happened: ', error)
            })
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const dataProduct = {
            id: params.id,
            updatedProduct: {
                title: title,
                price: price,
                description: description
            }
        }

        axios
            .put(`http://localhost:8080/api/${params.id}/edit`, dataProduct.updatedProduct)
            .then((res) => {
                updateProduct(dataProduct)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <form name="form" id="form" onSubmit={onSubmitHandler}>
            <p>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    defaultValue={price}
                    onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </p>
            <button type="submit"> Update </button>
        </form>
    )
}

export default ProductUpdate;