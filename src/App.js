import logo from './logo.svg';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import NavigationBar from './components/Home/NavigationBar';
import Home from './Pages/Home'

//initial asign a client to return content in the stores primary language
//const client = Client.buildClient(
//  {
//    domain: "hlongwane-botique.myshopify.com"
//    storefrontAcessToken: process.env.REACT_APP_ShopifyApiKey,
//  }
//)

//initialising a client to return translated content
function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;