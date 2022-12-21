import logo from './logo.svg';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import NavigationBar from './components/Home/NavigationBar';
import Home from './Pages/Home'
//import react and useEffect
import React, {useState, useEffect} from 'react';

//2initialising a client to return translated content
function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [headers, setheaders] = useState('');

  const addPosts = async (title, headers) => {
    try {
      await fetch('https://cbd-test-2.myshopify.com/api/2022-10/graphql.json', {
      //await fetch('https://jsonplaceholder.typicode.com/posts', {
      //await fetch('https://cbd-test-2.myshopify.com/admin/api/2021-07/shop.json', {
        method: 'POST',
        body: JSON.stringify({
          query: `
          query SomeQuery {
            
              products(first: 3) {
                edges {
                  node {
                    id
                    title
                  }
                }
              }
            
          }`,
        variables: {},
       }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'X-Shopify-Access-Token': '68c24e53308d8b57726ea2cf20f62dd2',
          },
        }, [])
      }catch (e) {
        console.log("error code below")
        console.log(e)
    }
}
  useEffect(() => {
    console.log(addPosts());
  }, [])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}
export default App;