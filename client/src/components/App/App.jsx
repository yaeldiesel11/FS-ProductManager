import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import ProductForm from '../Product/ProductForm';
import ProductList from '../Product/ProductList';
import ProductDetail from '../Product/ProductDetail';

const App = () => {

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8080')
      .then((res) => {
        setProducts(res.data)
        setLoaded(true)
      })
      .catch((error) => {
        console.log('Something wrong happened: ', error)
      })
  }, [])

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <button><Link to="" >List of products</Link></button>
      <Routes>
        <Route path="" element={
          <>
            <ProductForm />
            <ProductList products={products} />
          </>} />
        <Route path='/api/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
