import React, { useState } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import Logo from '../Authentication/logo.png';
import Cart from '../../pages/Cartpage/index'; 
import {Menu, X} from "lucide-react"
import CartLogo from './cart.png';
import styled from 'styled-components'
import toast from 'react-hot-toast'
import { UserContext } from '../../userContext';
import axios from 'axios'



const Navbar = () => {
  const { user,setUser } = useContext(UserContext); // Get user from context
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate() 

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Clear token cookie
    axios.post('http://localhost:8000/logout').then(() => {
      setLoggedIn(false);
    navigate('/authentication')
    }).catch(error => {
      console.error('Error logging out:', error);
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  const location = useLocation();

  const activeTab = (route) => {
    return route === location.pathname ? 'active' : '';
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top:0,
    })
  }

  const BurgerMenu  = styled.div`
  display: ${isOpen ? 'show' : 'show'};
  overflow: scroll;
  position: absolute;
  width: 60vw;
  background: #fafafa;
  height: 100%;
  z-index: 99;
  animation: slideFromLeft 0.3s forwards;
  
  
`;

  const StyledLi = styled.li`
  list-style-type: none;
  margin-top: 15px;
  color: #097327;
  font-weight: 700;
`;

  const StyledMenuIcon = styled(Menu)`
    color: #097327; /* Change color as desired */
  `;
  const StyledMenuIcon2 = styled(X)`
  color: #fafafa !important;
`;

  return (
    <>
    <div className='containermain'>


    <BurgerMenu className={isOpen ? '' : 'hidden'}>
        <div className=''>
          <div className='menubutton1'>
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <StyledMenuIcon2 />}</button>
          </div>
          <div className='menucolor2'>
          <p>Pippin's <br /> <span style={{ display: 'flex', justifyContent: 'center' }}>Breakfast</span></p>
          </div>
          
          </div>
          <div className='BurgerMenuContainer'>
    <ul>
      <StyledLi className={activeTab('/')}><Link to="/" onClick={scrollToTop}>Home</Link></StyledLi>
      <StyledLi className={activeTab('/menu')}><Link to="/menu" onClick={scrollToTop}>Menu</Link></StyledLi>
      <StyledLi className={activeTab('/order')}><Link to="/order">Order</Link></StyledLi>
      <StyledLi className={activeTab('/about')}><Link to="/about">About</Link></StyledLi>
      <StyledLi className={activeTab('/contact')}><Link to="/contact">Contact</Link></StyledLi>
    </ul>
  </div>
    </BurgerMenu>
    <div className='containers'>
      <div className='left-side'>
        <div className='mobile-menu'>
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <StyledMenuIcon />}
          
        </button>
        </div>
        <img src={Logo} alt='logo' />
        <p className='title'>Pippin's Breakfast</p>
      </div>

      <div className='center'>
      <nav className='navbar-links'>
      <ul>
            <li className={activeTab('/Homepage' && '/')}><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li className={activeTab('/menu')}><Link to="/menu" onClick={scrollToTop}>Menu</Link></li>
            <li className={activeTab('/order')}><Link to="/order" onClick={scrollToTop}>Order</Link></li>
            <li className={activeTab('/about')}><Link to="/about" onClick={scrollToTop}>About</Link></li>
            <li className={activeTab('/contact')}><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
        </ul>
        </nav>
      </div>
      <div className='right-side'>
        {user ? ( // Render login button if user is not authenticated
          <div className='flex'>
            <Link to="/cart">
            <img src={CartLogo} alt='cart' />
          </Link>
          <button onClick={handleLogout}>Logout</button>
          </div>

        ) : (
          <div className='flex'>
              <Link to="/cart">
            <img src={CartLogo} alt='cart' />
          </Link>
          <Link to='/Authentication'>
          <button>Log in</button>
          </Link>
          </div>
          
          
        )}
      </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
