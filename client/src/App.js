import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from '../src/pages/Homepage/index';
import Menu from '../src/pages/Menu/index';
import AboutusPage from './pages/Aboutus';
import ContactPage from './pages/Contact/index';
import OrderPage from './pages/Orderonline/index';
import CartPage from './pages/Cartpage/index';
import Authentication from './components/Authentication/Authentication';
import { UserContextProvider } from './userContext';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

const MainLayout = ({ children }) => {
  return (
    <div className='sticky'>
      <div className='main-nav'>
        <Navbar />
      </div>
      <div className='main-contents'>
        {children}
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
  }
  setTimeout(() => setLoading(false), 300); // Set timeout for 5 seconds
}, []);


  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Clear token cookie
    axios.post('http://localhost:8000/logout').then(() => {
      setLoggedIn(false);
    }).catch(error => {
      console.error('Error logging out:', error);
    });
  };

  return (
    <UserContextProvider>
      {loading ? (
        <div>Loading...</div> // Render a loading indicator while checking token
      ) : (
        <>
          <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
          {loggedIn ? console.log("You are logged in") : console.log("You are not logged in")}
          <Router>
            <Routes>
              <Route element={<MainLayout><Homepage /><button onClick={handleLogout}>logout2</button></MainLayout>} path="/" />
              <Route element={<MainLayout><Homepage /></MainLayout>} path="/Homepage" />
              <Route element={<MainLayout><ContactPage /></MainLayout>} path="/contact" />
              <Route element={<MainLayout><OrderPage /></MainLayout>} path="/order" />
              <Route element={<MainLayout><AboutusPage /></MainLayout>} path="/about" />
              <Route element={<MainLayout><Menu /></MainLayout>} path="/menu" />
              <Route element={<MainLayout><CartPage /></MainLayout>} path="/cart" />
            </Routes>
            <Routes>
              <Route path="/Authentication" element={<Authentication />} />
            </Routes>
          </Router>
        </>
      )}
    </UserContextProvider>
  );
};

export default App;
