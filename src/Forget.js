import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ForgetPasswordContainer = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Group = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PasswordInput = styled(Input)`
  width: calc(100% - 40px);
`;

const FormButton = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    // Handle password reset logic here
    navigate('/'); // Navigate to home or another page after reset
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <ForgetPasswordContainer>
      <form onSubmit={handleSubmit}>
        <FormHeading>Forget Password</FormHeading>
        <Group>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Group>
        <Group>
          <Label htmlFor="password">New Password:</Label>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter new password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <IconWrapper onClick={toggleShowPassword}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} style={{ color: '#000' }} />
          </IconWrapper>
        </Group>
        <Group>
          <Label htmlFor="confirmPassword">Confirm New Password:</Label>
          <PasswordInput
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <IconWrapper onClick={toggleShowConfirmPassword}>
            <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} style={{ color: '#000' }} />
          </IconWrapper>
        </Group>
        <FormButton type="submit">Reset Password</FormButton>
      </form>
    </ForgetPasswordContainer>
  );
};

export default ForgetPasswordForm;
