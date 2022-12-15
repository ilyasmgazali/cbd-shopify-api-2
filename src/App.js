import logo from './logo.svg';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import NavigationBar from './components/Home/NavigationBar';
import Home from './Pages/Home'
//import react and useEffect
import React, {useEffect} from 'react';
//import shopify sdk/api
import Client from 'shopify-buy'

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'https://cbd-test-2.myshopify.com/stukla',
  storefrontAccessToken:'68c24e53308d8b57726ea2cf20f62dd2'
});

//2initialising a client to return translated content
function App(props) {
  const makeAPICall = async () => {
    try {
          // Fetch all products in your shop
    client.product.fetchAll().then((products) => {
      // Do something with the products
      console.log(products);
    });
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}
export default App;