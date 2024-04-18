
import './App.css';

import { Footer } from './components/Footer/Footer';
import Allroutes from './components/Allroutes/Allroutes';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <h3 style={{color:"white"}}>ESS GEE</h3>
      <Allroutes />
      <Footer/>
    </div>
  );
}

export default App;
