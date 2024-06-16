import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <h1 style = {{color:'green'}}>Hi! Everyone...</h1>
      <Hello/>
      <Welcome name = "Varshini" location = "Bangalore">Day 2 - React</Welcome>
    </div>
  );
}

export default App;
