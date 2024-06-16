import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Welcome from './Welcome';
import Wishing from './Wishing';
import AddToCart from './AddToCart';

function App() {
  return (
    <div>
      <h1 style = {{color:'orange'}}>Hi! Everyone...</h1>
      <Hello username = "Varshini" password = "varshini24"/>
      <Welcome name = "Varshini" location = "Bangalore" color = "Green">React JS</Welcome>
      <Wishing/>
      <AddToCart/>
    </div>
  );
}

export default App;
