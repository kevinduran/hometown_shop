import './App.css';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import Routez from './components/front/Routes/Routes'


function App() {

  const {productItems} = data;

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routez/>
      </Router>
    </div>
  );
}

export default App;
