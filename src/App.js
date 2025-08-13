import logo from './logo.svg';
import './App.css';
import Routing from './Routing/Routing';
import logo1 from "./Assets/w.png";

function App() {
  return (
    <div className="App">
      <Routing />
      <a href="https://wa.me/919489050505" target="_blank" rel="noopener noreferrer">
        <img src={logo1} className='wats' alt="WhatsApp" />
      </a>
    </div>
  );
}

export default App;
