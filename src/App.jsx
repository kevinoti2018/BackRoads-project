
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tours from './pages/Tours';
import Footer from './Components/Footer';
function App() {

  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>

    </div>
  )
}

export default App
