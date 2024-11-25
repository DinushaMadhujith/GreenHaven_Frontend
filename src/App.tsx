import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Products />
      <Contact />
    </div>
  );
}

export default App;