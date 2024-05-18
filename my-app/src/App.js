import logo from './logo.svg';
import './App.css';
import ProductList from './components/products-list';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/cart';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
