import React from 'react';
import "./css/login.css";
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider);
  };
  console.log("here")

  return (
    <div className='login'>
      <div className="login__container">
        <img src="/gmail.png" alt="" />
        <Button variant="contained" color='primary' onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login