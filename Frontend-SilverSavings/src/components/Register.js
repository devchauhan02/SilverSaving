import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    console.log("Here");
    console.log("API URL:", process.env.REACT_APP_API_URL);

    e.preventDefault();
    // POST /register

    const url = "http://localhost:8000" + "/register";
    console.log("hello")
  

    console.log('Registering with:', email, password);
    try {
        const response = await axios.post(url, {email, password})
        navigate('/');
    } catch(err) {
        alert(err.message); 
    }
    
    // Add your login logic here, such as API calls
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={(e) => {
        console.log("Form submitted"); 
        handleRegister(e); 
      }} className="login-form">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
