import React, { useEffect, useState } from "react";
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8080/api/add/product', { title, price, description })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label>
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </p>
            <button type="submit"> Create </button>
        </form>
    )
}

export default ProductForm;