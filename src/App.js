
import './App.css';

import { Footer } from './components/Footer/Footer';
import Allroutes from './components/Allroutes/Allroutes';
import Navbar from './components/Navbar/Navbar';
// import { About } from './components/Pages/About';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <h2 style={{color:"white"}}>ESS GEE</h2>
      <Allroutes />
      <Footer/>
    </div>
  );
}

export default App;
