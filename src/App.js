import './App.css';
import logo from './assets/logo.png';


function App() {
  return (
    <div className="App">
      <div className='coming_soon'>
        <h1>Coming soon...</h1>
        <div>
        <img className='coming_soon_logo' alt="logo" src={logo} /> 
          <div>
            <h3>Apparrel Shop</h3>
            <h6>2.0</h6>
          </div>
        </div>
        <a href='https://hometownbarbershop805.com/'><button>go back</button></a>
      </div>
      
    </div>
  );
}

export default App;
