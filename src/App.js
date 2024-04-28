import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import ChekoutPage from './pages/CheckoutPage/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import GenderCategoryPage from './pages/GenderCategoryPage/GenderCategoryPage';
import QueryPage from "./pages/QueryPage/QueryPage";

import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#0d41d1'
    }
  }
});
    

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<ChekoutPage />} />
          <Route path="confirm" element={<ConfirmationPage />} />
          <Route path="query/:query" element={<QueryPage />} />
          <Route path="browse/:type/:category/:subcategory" element={<GenderCategoryPage />} />
          <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
