import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';


const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Authentication logic here
    try {
      const response = await axios.post('http://localhost:5001/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        
        navigate('/'); //navigate empty for now
      }
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };


  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <Container maxWidth="sm" className="login-container">
      <Typography variant="h4" 
      component="h1" 
      align="right" 
      color="secondary" 
      gutterBottom>
        Login or Create Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="large"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button variant="outlined" color="secondary" onClick={goToSignUp}>
          Create Account
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;