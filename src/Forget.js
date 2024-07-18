import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ForgetPasswordContainer = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 130px;
  backdrop-filter: blur(5px);
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
  paddingRight: '40px'
`;

const PasswordInput = styled(Input)`
  width: 95%;
  paddingRight: '40px';
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
  top: 65%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ccc; /* default color */
`;

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform forget password logic here (e.g., send email to reset password)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Group>
        <Group>
          <Label htmlFor="password">New Password:</Label>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <IconWrapper onClick={toggleShowPassword}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} style={{ color: '#000', cursor: 'pointer' }} />
          </IconWrapper>
        </Group>
        <Group>
          <Label htmlFor="confirmPassword">Confirm New Password:</Label>
          <PasswordInput
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <IconWrapper onClick={toggleShowConfirmPassword}>
            <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} style={{ color: '#000', cursor: 'pointer' }} />
          </IconWrapper>
        </Group>
        <FormButton type="submit">Reset Password</FormButton>
      </form>
    </ForgetPasswordContainer>
  );
};

export default ForgetPasswordForm;
