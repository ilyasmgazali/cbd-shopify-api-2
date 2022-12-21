import logo from './logo.svg';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import NavigationBar from './components/Home/NavigationBar';
import Home from './Pages/Home'
//import react and useEffect
import React, {useEffect} from 'react';
//import shopify sdk/api
import Client from 'shopify-buy'
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';

const shopify = shopifyApi({
  // The next 4 values are typically read from environment variables for added security
  apiKey: '4a1599f20ba8723ec0cf2ab97d3e921a',
  apiSecretKey: '338fa0e569d415966c9c37254452bd52',
  scopes: ['read_products'],
  hostName: 'https://cbd-test-2.myshopify.com/admin/api/2020-01/customers.json',
});

  // Load the access token as per instructions above
  const storefrontAccessToken = '68c24e53308d8b57726ea2cf20f62dd2';
  // Shop from which we're fetching data
  const shop = 'https://cbd-test-2.myshopify.com/';
  // StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
  const storefrontClient = new shopify.clients.Storefront({
  domain: shop,
  storefrontAccessToken,
});

//2initialising a client to return translated content
function App(props) {
  const makeAPICall = async () => {
    try {
      // Use client.query and pass your query as `data`
      const products = await storefrontClient.query({
        data: `{
          products (first: 3) {
            edges {
              node {
                id
                title
              }
            }
          }
        }`,
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