import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form className="login-form" >
            <label htmlFor="">Name:</label>
            <input  type="text"/>
            <label htmlFor="">Password:</label>
            <input type="password"/>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div className="already-register-text">
            <span className="no-register-text">No account?</span>
            <Link className="link" to="/register">
              Register
            </Link> 
          </div>   
        </div>
      </div>
    </>
  )
}

export default Login
