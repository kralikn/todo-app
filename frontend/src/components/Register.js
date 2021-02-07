import React, { useState } from 'react';
import './Register.css';
import { Link } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  return (
    <>
      <div className="register-container">
        <div className="register-box">
          <h2>Register</h2>
          <form className="register-form" action='/login'>
            <div className="register-form-control">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="username"
              />
            </div>
            <div className="register-form-control">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
              />
            </div>
            <div className="register-form-control">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
              />
            </div>
            <button type="submit" className="register-btn" >Register</button>
          </form>
          <div className="already-register-text">
            <span className="login-text">Already have an account?</span>
            <Link className="link" to="/">
              Login
            </Link> 
          </div>       
        </div>
      </div>
    </>
  )
}

export default Register
