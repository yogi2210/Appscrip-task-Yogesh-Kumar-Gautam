
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Product from './sections/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
