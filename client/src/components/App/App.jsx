import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import ProductForm from '../Product/ProductForm';
import ProductList from '../Product/ProductList';
import ProductDetail from '../Product/ProductDetail';
import ProductUpdate from '../Product/ProductUpdate';

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((error) => {
        console.log('Something wrong happened: ', error)
      })
  }, [])

  const addNewProduct = (newProduct) => {
    console.log(newProduct)
    setProducts([...products, newProduct])
  }

  const updateProduct = (dataProduct) => {
    const { id } = dataProduct
    const { updatedProduct } = dataProduct
    let index = products.findIndex((product) => product._id === id)
    let productList = [...products]
    productList[index].title = updatedProduct.title
    productList[index].price = updatedProduct.price
    productList[index].description = updatedProduct.description
    setProducts([...productList])
  }

  const deleteProduct = (id) => {
    let index = products.findIndex((product) => product._id === id)
    let productList = [...products]
    productList.splice(index, 1)
    setProducts([...productList])
  }

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <button><Link to="" >List of products</Link></button>
      <Routes>
        <Route path="" element={
          <>
            <ProductForm addNewProduct={addNewProduct} />
            <ProductList products={products} deleteProduct={deleteProduct} />
          </>} />
        <Route path='/api/:id' element={<ProductDetail deleteProduct={deleteProduct} />} />
        <Route path='/api/:id/edit' element={<ProductUpdate updateProduct={updateProduct} />} />
      </Routes>
    </div>
  );
}

export default App;
