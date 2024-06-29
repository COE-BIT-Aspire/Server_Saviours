import logo from './logo.svg';
import './App.css';
import {Route,Link,BrowserRouter,Routes} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import ContactUs from './ContactUs';
import Product from './Product';
import Laptop from './Laptop';

function App() {
  return (
    <div>
      <h1 style = {{color:'orange'}}>Hi! Everyone...</h1>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path = 'home' element = {<Home/>}/>
        <Route path = 'contactus' element = {<ContactUs/>}/>
        <Route path = 'product' element = {<Product/>}/>
        <Route path = '/product/laptop' element = {<Laptop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
