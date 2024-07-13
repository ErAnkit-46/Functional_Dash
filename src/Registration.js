import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Registration.css';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/');
    // window.location.href = 'http://192.168.56.1:3001';
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>New Resistration</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='Enter email address'
            value={email}
            onChange={handleEmailChange}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder='Enter password'  
            value={password}
            onChange={handlePasswordChange}
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="password"
            placeholder='Re-enter password'  
            value={password}
            onChange={handlePasswordChange}
            // required
          />
        </div>

        
        <button type="submit"><a href="/"></a>Resister</button>
       
      </form>
    </div>
  );
}


export default Registration;