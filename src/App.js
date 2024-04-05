import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Header from './components/Header';
import Category from './components/Category';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <BrowserRouter>
      <AppBar position="sticky" elevation={0}>
        <Header />
        <Category />
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
