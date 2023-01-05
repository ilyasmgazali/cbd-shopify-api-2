import logo from './logo.svg';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import NavigationBar from './components/Home/NavigationBar';
import Home from './Pages/Home'
//import react and useEffect
import React, {useState, useEffect} from 'react';
import { ListItemSecondaryAction } from '@mui/material';

//2initialising a client to return translated content
function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [headers, setheaders] = useState('');
  const [posts, setPosts] = useState([]); //store product data from api

  //first 20 products
  const query = `{ products(first: 20) { edges { node { title description images(first: 1) { edges { node { altText transformedSrc(maxWidth: 400, maxHeight: 400) } } } } } } }`; 
  const apiCall = async (title, body, headers) => {
    try {
      await fetch('https://cbd-test-2.myshopify.com/api/2022-10/graphql.json',
        {
          method: 'POST', 
          headers: { 'Content-Type': 'application/graphql', 
                        'X-Shopify-Storefront-Access-Token': "68c24e53308d8b57726ea2cf20f62dd2" 
                      },
          body: query
        } 
      )
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        setPosts(data) //useState updated
      })
      .catch((err) => {
        console.log(err.message);
      })
    }catch (e) {
        console.log("error code below")
        console.log(e)
    }
  }
  useEffect(() => {
    console.log("log: useEffect has run")
    apiCall() 
  }, [])
  console.log("useState is here: postsssssss")
  console.log(posts)

  const jsonObject = posts;
  console.log("JSON iterator")  
    console.log("inside try")
    console.log(jsonObject.data?.products.edges.forEach(element => {
      console.log(element.node.title)
    }))
    console.log(jsonObject.data?.products.edges.map(n => '<li>' + n.node.title + '<li>'))
    //const print =  jsonObject.data?.products.edges.map(n => n.node.title )
    //const myObject = jsonObject?.data.products.edges;
  return (   
    <div className="App">
      <Home/>
      <div>
        <h1>Products Page</h1>
        <ul>
          {jsonObject.data?.products.edges.map(item => 
          <li key={item.node.title}>
            <h2>{item.node.title}</h2>
            <p>{item.node.description}</p>
            <img src={item.node.images.edges[0].node.transformedSrc}></img>
          </li>)}
        </ul>
      </div>
    
  </div>
  );
}
export default App;