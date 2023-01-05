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

  const addPosts = async (title, body, headers) => {
    try {
      await fetch('https://cbd-test-2.myshopify.com/api/2022-10/graphql.json', {
      //await fetch('https://jsonplaceholder.typicode.com/posts', {
      //await fetch('https://cbd-test-2.myshopify.com/admin/api/2021-07/shop.json', {
        method: 'POST',
        body: JSON.stringify({
          query: `{
            products(first: 3) {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }`
        }),
        headers: {
            'Content-type': 'application/graphql; charset=UTF-8',
          
            'X-Shopify-Storefront-Access-Token': '68c24e53308d8b57726ea2cf20f62dd2',
          },
        }, [])
        .then(response => response.json())
        .then(data => setBody({data}))
      }catch (e) {
        console.log("error code below")
        console.log(e)
    }
  }
  addPosts();
  useEffect(() => {
    console.log("log: useEffect has run")
    console.log(addPosts());
    addPosts().then(()=>console.log(body))
    console.log(body)
    async function getApiAndSetState() {
      let data = await getAPI(); // the code pauses here until getAPI() completes.
      console.log(data); // this data is now available
      }
  }, [])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}
export default App;