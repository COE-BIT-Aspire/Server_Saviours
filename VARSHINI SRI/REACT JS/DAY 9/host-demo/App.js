import logo from './logo.svg';
import './App.css';
import {Route,Link,BrowserRouter,Routes} from 'react-router-dom';
import Sample from './Sample';

function App() {
  return (
    <div>
      <h1 style = {{color:'orange'}}>Hi! Everyone...</h1>
    <Sample/>
    </div>
  );
}
export default App;
