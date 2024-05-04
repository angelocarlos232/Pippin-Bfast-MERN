import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import './login.css'

const SignupPage = () => {
  
  const navigate =useNavigate()

  const [data, setData] = useState({
    email: '',
    password: '',
    repeatpassword: '',
  })
  
  const registerUser =async (e) => {
    e.preventDefault();
    const {email, password, repeatpassword} = data
    try {
      const {data} = await axios.post('http://localhost:8000/register',{
        email, password, repeatpassword,
      })
      if(data.error){
        toast.error(data.error)
      } else{
        setData({})
        toast.success("Register Successful. Welcome!")
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
          <form onSubmit={registerUser} className='login-1'>
            <div className='loginpagetitle'>
              <h1>Create your Account</h1>
              <p>Enter your details to register</p>
            </div>
            <div className='loginpageinputs'>
              <label className='label'>
                Email:
              </label>
              <input 
              value={data.email} 
              onChange={(e) => setData({...data, email: e.target.value})} 
              className='input'
              placeholder='Enter your email address here' 
              />
              <label className="label">Password:</label>
              <input 
              value={data.password} 
              onChange={(e) => setData({...data, password: e.target.value})} 
              className='input' 
              type='password'
              placeholder='Enter your password here'  
              />
              <label className='label'>REPEAT PASSWORD:</label>
              <input 
              value={data.repeatpassword} 
              onChange={(e) => setData({...data, repeatpassword: e.target.value})} 
              className='input' 
              type='password' 
              placeholder='Enter your password again here' 
              />
              
            </div>
            <div className="loginpage-button flex mt-4 justify-between">
                <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Sign Up
                </button>
            </div>
          </form>
        </div>

  )
}

export default SignupPage;
