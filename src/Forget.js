import React, { useState } from 'react';
import styled from 'styled-components';

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

const EmailGroup = styled.div`
  margin-bottom: 20px;
`;

const EmailLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PasswordGroup = styled.div`
  margin-bottom: 20px;
`;

const PasswordLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const PasswordInput = styled.input`
  width: 95%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ConfirmPasswordGroup = styled.div`
  margin-bottom: 20px;
`;

const ConfirmPasswordLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const ConfirmPasswordInput = styled.input`
  width: 95%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormButton = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform forget password logic here (e.g., send email to reset password)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <ForgetPasswordContainer>
      <form onSubmit={handleSubmit}>
        <FormHeading>Forget Password</FormHeading>
        <EmailGroup>
          <EmailLabel htmlFor="email">Email:</EmailLabel>
          <EmailInput
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </EmailGroup>
        <PasswordGroup>
          <PasswordLabel htmlFor="password">New Password:</PasswordLabel>
          <PasswordInput
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </PasswordGroup>
        <ConfirmPasswordGroup>
          <ConfirmPasswordLabel htmlFor="confirmPassword">Confirm New Password:</ConfirmPasswordLabel>
          <ConfirmPasswordInput
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </ConfirmPasswordGroup>
        <FormButton type="submit">Reset Password</FormButton>
      </form>
    </ForgetPasswordContainer>
  );
};

export default ForgetPasswordForm;