import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import crinigerTechnologiesLogo from '../assets/criniger-technologies-logo.png';
import '../css/login.css'; 
// import axios from "axios";

import { useNavigate } from "react-router-dom";
import { apiCall } from '../api/apiClient';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [Data, setData]= useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await apiCall("POST", "Login", {username, password});
      console.log(response)
      // const { token } = response.data;
      // localStorage.setItem("authToken", token); // Save token locally
      setData("Login successful!");
      navigate("/dashboard"); // Navigate to the protected page
    } catch (error) {
      setError("Invalid username or password");
    }

    
  };

  const handleForgotPassword = async () => {
    try {
      // Call the API
      const response = await apiCall("POST" , "forgot-password");

      // Display success message
      alert("Password reset email sent successfully.");
      // navigate("/reset-password")
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert(error.response || "Something went wrong.");
    }
  };


  return (
    <div className="login-page"> 
      <div className="login-container">
        <div className="logo-container" aria-label="Company Logo">
          <img 
            src={crinigerTechnologiesLogo} 
            alt="Criniger Technologies Logo" 
            className="logo" 
          />
        </div>
        <div className="form-wrapper"> 
          <form onSubmit={handleLogin}>
            <h2 className='login-heading'>Access Gateway</h2>
            <div className="form-group">
              <label className='login-label' htmlFor="username">Username</label>
              <div className="login-input-container">
                <i className="fa fa-user"></i> 
                <input 
                  id="username"
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  required 
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="form-group">
              <label className='login-label' htmlFor="password">Password</label>
              <div className="login-input-container">
                <i className="fa fa-lock"></i> 
                <input 
                  id="password"
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button className='login-btn' type="submit">Login</button>
            <div className="login-forgot-password">
              <a onClick={handleForgotPassword} >Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

