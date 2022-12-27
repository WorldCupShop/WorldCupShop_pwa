
import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import Commerce from '@chec/commerce.js';

import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from './Pages/Home/Home';
import { SignUp } from './Pages/SignUp/SignUp';
import { SignIn } from './Pages/SignIn/SignIn';
import { ProductsPage } from './Pages/ProductsList/ProductsPage';
import { DetailsProductPage } from './Pages/DetailsProduct/DetailsProductPage';
import { Settings } from './Pages/Settings/Settings';
import { FavoritesPage } from './Pages/Favorites/FavoritesPage';
import { CartPage } from './Pages/Cart/CartPage';
import { ThanksPage } from './Pages/Thanks/ThanksPage';
import { ContactPage } from './Pages/ContactUs/ContactPage';
import { ErrorPage } from './Pages/Error/ErrorPage';


function App() {

  const commerce = new Commerce(process.env.REACT_APP_COMMERCEJS_PUBLIC_KEY, true);

  return (
    <>
    <ThemeProvider theme={getTheme()}>
      <BrowserRouter>
        <ToastContainer />
        <Container maxWidth = {false}>
          <Container maxWidth = "lg">
            <Routes>
              <Route path="/" element={<Home commerce={commerce}/>} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/products" element={<ProductsPage commerce={commerce}/>} />
              <Route path="/products/:id" element={<DetailsProductPage commerce={commerce}/>} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/favorites" element={<FavoritesPage commerce={commerce}/>} />
              <Route path="/cart" element={<CartPage commerce={commerce}/>} />
              <Route path="/thanks" element={<ThanksPage commerce={commerce}/>} />
              <Route path="/contact-us" element={<ContactPage commerce={commerce}/>} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
          </Container>
        </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
