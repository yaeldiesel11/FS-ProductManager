import React, { useEffect, useState } from "react";
import axios from 'axios';

const ProductForm = ({ addNewProduct }) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const apiCall = async () => {
            try {
                let res = await axios.post('http://localhost:8080/api/add', {
                    title: title,
                    price: price,
                    description: description
                })
                if (title && price && description) {
                    addNewProduct(res.data.product)
                    setError("")
                } else {
                    setError("All fields required")
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        apiCall()
    }

    return (
        <form name="form" id="form" onSubmit={onSubmitHandler}>
            <p>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </p>
            <div>
                <span>{(error !== "") ? error : ""}</span>
            </div>
            <button type="submit"> Create </button>
        </form>
    )
}

export default ProductForm;