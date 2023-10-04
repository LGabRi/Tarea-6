// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Title from './components/Title'
import Hero from './components/Hero'



function App() {
  return (
    <div className="App">
      <header><Title /></header>
      <NavBar />
      <section className="hero">
        <Hero />
      </section>
    </div>
  );
}

export default App;
