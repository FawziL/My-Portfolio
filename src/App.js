import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Home from './components/Home/Home.js'
import Proyects from './components/Proyects/Proyects.js'
import Services from './components/Services/Services.js'
import Contact from './components/Contact/Contact.js'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
      </div>
      <div>
      <Services/>
      </div>
      <div>
      <Proyects/>
      </div>
      <div>
      <Contact/>
      </div>

      
    </>
  );
}

export default App;
