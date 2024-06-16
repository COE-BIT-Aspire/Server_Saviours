import logo from './logo.svg';
import './App.css';
import AddToCart from './AddToCart';
import WishLabel from './WishLabel';

function App() {
  return (
    <div>
      <h1 style = {{color:'orange'}}>Hi! Everyone...</h1>
      <AddToCart/>
      <WishLabel/>
    </div>
  );
}

export default App;
