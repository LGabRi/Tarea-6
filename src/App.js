// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Gabriel from './components/Gabriel';
import Benjaja from './components/Benjaja';
import Footer from './components/Footer';






function App() {
  return (
    <div className="App">
      <header><Title /></header>
      <NavBar />
      <div className="container-1">
        <Hero />
      </div>
      <div className="container-2">
        <Nosotros />
      </div> 
      <div className="container-3">
        <Gabriel /> 
        <Benjaja />     
      </div>
      <footer className="footer">
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
