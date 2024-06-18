import logo from './logo.svg';
import './App.css';
import {Route,Link,BrowserRouter,Routes} from 'react-router-dom';
import { LoginForm } from './LoginForm';
function App() {
  return (
    <div>
      <h1 style = {{color:'orange'}}>Hi! Everyone...</h1>
    <LoginForm/>
    </div>
  );
}
export default App;
