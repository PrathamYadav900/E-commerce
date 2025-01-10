import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-white hover:text-gray-400">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
