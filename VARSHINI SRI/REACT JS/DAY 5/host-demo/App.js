import logo from './logo.svg';
import './App.css';
import ConditionalRender from './ConditionalRender';
import LoginControl from './LoginControl';

function App() {
  return (
    <div>
      <h1 style = {{color:'orange'}}>Hi! Everyone...</h1>
      <ConditionalRender/>
      <LoginControl/>
    </div>
  );
}

export default App;
