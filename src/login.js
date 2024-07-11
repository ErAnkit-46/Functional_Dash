import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false); // State for tooltip visibility
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dash');
    // window.location.href = 'http://192.168.56.1:3001';
  };

  const tooltipStyle = {
    position: 'absolute',
    top: '50%',
    left: '105%',
    marginTop: '-15px',
    padding: '10px',
    width: '300px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
    color: '#333',
    zIndex: 1,
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={handleEmailChange}
            // required
          />
        </div>

        <div style={{ position: 'relative', width: 'fit-content' }}>
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            style={{
              padding: '10px',
              width: '330px',
              border: '1px solid #ccc', // Add explicit border style
              borderRadius: '5px',     // Add explicit border radius
            }}
            onFocus={() => setShowTooltip(true)} // Show tooltip on focus
            onBlur={() => setShowTooltip(false)} // Hide tooltip on blur
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={toggleShowPassword}
            style={{
              position: 'absolute',
              right: '10px',
              top: '65%',
              transform: 'translateY(-50%)',
              color: '#000000',
              cursor: 'pointer',
            }}
          />
          {showTooltip && (
            <div style={tooltipStyle}>
              Password must be at least 8 characters long and contain a mix of letters and numbers.
            </div>
          )}
        </div>

        <div className="flex">
          <div className="check">
            <div><input type="checkbox" /></div>
            <label htmlFor="rememberMe">Remember me </label>
          </div>
          <div>
            <a href="/forget" className="green">Forgot password?</a>
          </div>
        </div>

        <button type="submit"><a href="/dash"></a>Log In</button>
        <p className="color">Don't have an account? <a className="green" href="/register">Register</a></p>
      </form>
    </div>
  );
}

export default Login;
