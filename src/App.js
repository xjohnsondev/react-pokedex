import Pokedex from './Pokedex';
import logo from './media/pokemon-logo.png';
import './App.css';

function App() {

  return (
    <div className="App">
    <img className="logo" src={logo} alt="logo"></img>
    <Pokedex />
    </div>
  );
}

export default App;
