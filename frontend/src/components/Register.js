import React, { useState } from 'react';
import './Register.css';
import { Link } from "react-router-dom";
import axios from 'axios'

const Register = () => {

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [todo, setTodos] = useState("");  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const validateMessages = (values) => {

    let errors = {};

    if (!values.username.trim()) {
      errors.username = 'Username required';
    } else if (values.username.length < 4) {
      errors.username = 'Username needs to be 4 characters or more';
    }

    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }

    return errors;
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateMessages(values));

    const {username, email, password } = values;

    const User = {
      username: username,
      email: email,
      password: password,
      todos : {todo: todo},
    };

    console.log(User);

    axios.post('http://localhost:3001/register', User)
      .then(res => {
        if(res.data === 'User added!'){
          setValues({
            username: '',
            email: '',
            password: '',
          });
        }
        window.location = '/';
      })
      .catch((error) => {
        console.log(error);
      })
     
    };
   

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
                value={values.username}
                onChange={handleChange}
              />
            {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="register-form-control">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="register-form-control">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit" className="register-btn" onClick={handleSubmit}>Register</button>
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
