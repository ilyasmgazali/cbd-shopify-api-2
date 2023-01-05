import logo from './logo.svg';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import NavigationBar from './components/Home/NavigationBar';
import Home from './Pages/Home'
//import react and useEffect

import { ListItemSecondaryAction } from '@mui/material';

import React, { useEffect, useState } from 'react';
import Client  from 'shopify-buy';

const shopify = new Client({
  domain: 'your-shop-name.myshopify.com',
  storefrontAccessToken: 'your-access-token'
});

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await shopify.product.fetchAll();
        setProducts(response);
      } catch(error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;