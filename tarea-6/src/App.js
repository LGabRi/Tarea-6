// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';




function App() {
  return (
    <div className="App">
      <header><Title /></header>
      <NavBar />      
      <Hero />
      <Nosotros />
    </div>
  );
}

export default App;
