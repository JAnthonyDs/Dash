import React from 'react';
import './App.css';

import {useNavigate} from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  function log(){
    navigate('/dashboard')
  }

  return (
    <div className='fora'>
    <div className='wrapper'>
      <div className='form'>
        <form>
          <h1>LOGIN</h1>
          
          <input className='campo' type='text' name='email' required placeholder='email@email.com'></input>
          <br></br>
          
          <input className='campo' type='password' name='senha' required placeholder='senha'></input>
          <br></br>
          
          <input className='btn-submit' type='submit' value='acessar' onClick={() => log()}></input>
        </form>
        <div className='rodape'>
          
          <div></div>
        </div>
      </div>
      
    
    </div>
    </div>
  );
}

export default Login;
