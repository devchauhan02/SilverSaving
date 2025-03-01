import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("userID")
  if(isLoggedIn){
    window.location.href = "/home"
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here, such as API calls
    console.log("login")
    const url =  "http://localhost:8000" + "/login"

    try {
      const response = await axios.post(url, {email, password})
      console.log('Logging in with:', email, password);
      const userID = response.data.userID; 
      localStorage.setItem("userID", userID); 
      window.location.href = "/home"
    } catch(err) {
      alert("Account Not Found!!"); 
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button> 
        <p>Not registered yet? <a href="/register" className='register'>Register Now!</a></p>
      </form>
    </div>
  );
};

export default Login;
