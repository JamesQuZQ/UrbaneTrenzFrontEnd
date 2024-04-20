import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import ChekoutPage from './pages/CheckoutPage/CheckoutPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<ChekoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
