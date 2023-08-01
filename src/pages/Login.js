import React, { useState } from 'react';

import '../styles/Login.css'; // Import CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Perform login logic here

    // Reset form fields after submitting
    setUsername('');
    setPassword('');
  };

  const handleGoogleSignIn = () => {
    // TODO: Implement Google Sign In functionality
  };

  
  return (
    <div className="login-page">
      
      <img src={require('../Images/summary.jpg')} alt="logo-image" className="logo-image" />
      <button onClick={handleGoogleSignIn} className="google-button">
      <img src={require('../Images/googleLogo.png')}  alt="Google Logo" className="google-logo" />
          Sign in with Google
        </button>

       {/* Form */}
       <form onSubmit={handleSubmit}></form>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
  type="text"
  id="username"
  value={username}
  onChange={handleUsernameChange}
  placeholder="Enter your email"
/>

{/* Password input field */}
<label htmlFor="password"></label>
<input 
  type="password" 
  id="password" 
  value={password}  
  onChange={handlePasswordChange}
  placeholder="Enter your password"
/>

        
        <button type="submit">Login</button>
        
      </form>      
      <button type="submit">Back</button>
     </div>   
     
   );
   
};

export default Login;