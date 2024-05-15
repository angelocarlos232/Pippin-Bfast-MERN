import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })



  const loginUser = async(e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('http://localhost:8000/login', {
        email, password
      });
      if (data.error){
        toast.error(data.error)
      } else{
        toast.success("Login Successful")
        setData({});
        localStorage.setItem('token', data.token)
        setTimeout(() => navigate('/'), 100);

      }
    } catch (error) {
      console.log("error")
    }
  }

  return (
    <div className="container">
  <form onSubmit={loginUser} className="login-1">
    <div className="loginpagetitle">
      <h1>Pippin's Breakfast 🍔</h1>
      <p>Enter your details to login</p>
    </div>
    <label className="label">Email:</label>
    <input
      className="input"
      type="email"
      name="email"
      placeholder="Email"
      value={data.email}
      onChange={(e) => setData({ ...data, email: e.target.value })}
    />
    <label className="label">Password:</label>
    <input
      className="input"
      type="password"
      name="password"
      placeholder="Password"
      value={data.password}
      onChange={(e) => setData({ ...data, password: e.target.value })}
    />
    <div className="loginpage-button">
      <button
        type="submit"
        className="button"
      >
        Sign In
      </button>
    </div>
  </form>
</div>

  
  );
}

export default LoginPage;
