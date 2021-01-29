import React, { useEffect, useState } from "react";
import axios from "axios";
import axiosWithAuth from '../helpers/axiosWithAuth'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { push } = useHistory()
  const [formValue, setformValue] = useState({
    username: '',
    password: ''
  })

  const handleChanges = (e) => {
   const { name, value } = e.target;
    setformValue({
      ...formValue,
      [name]: value
    });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('/login', formValue)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      push('/bubblepage')

      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  axios.post()

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <form onSubmit={login}>
          <label>
            Username:
          </label>
          <input 
          type='text'
          name='username'
          id='username'
          value={formValue.username}
          onChange={handleChanges} />
          <label>
            Password:
          </label>
          <input
          type='text'
          name='password'
          id='password'
          value={formValue.password}
          onChange={handleChanges} />
          <button onSubmit={login}>Login</button>
        </form>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.