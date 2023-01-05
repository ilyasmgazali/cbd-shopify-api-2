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
  const [posts, setPosts] = useState([]);

  const query = `{ products(first: 20) { edges { node { title description images(first: 1) { edges { node { altText transformedSrc(maxWidth: 400, maxHeight: 400) } } } } } } }`; 
  function apiCall(query) { 
    return fetch('https://cbd-test-2.myshopify.com/api/2022-10/graphql.json', 
        { method: 'POST', 
            headers: { 'Content-Type': 'application/graphql', 
                       'X-Shopify-Storefront-Access-Token': "68c24e53308d8b57726ea2cf20f62dd2" 
                     },
            "body": query })
            .then(response => response.json())
            .catch((err) => {
              console.log(err.message);
           }
           ); 
          } 
  apiCall(query).then(response => { console.log(response) });

  console.log("usestate data is hereeeeeeee")
  console.log(posts);
  return (
    <div className="App">
      <Home/>

    </div>
  );
}
export default App;