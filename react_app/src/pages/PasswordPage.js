import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, List, ListItem, ListItemText } from '@mui/material';

const PasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const passwordRequirements = [
    { id: 1, text: '- Passwords require 1 or more uppercase letters', regex: /[A-Z]/ },
    { id: 2, text: '- Passwords require 1 or more numbers', regex: /[0-9]/ },
    { id: 3, text: '- Passwords are required to be 6 or more letters long ', regex: /^.{6,}$/ },
  ];

  const checkPassword = (password) => {
    const valid = passwordRequirements.every((requirement) => requirement.regex.test(password));
    setIsValidPassword(valid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidPassword && password === passwordConfirm) {
      console.log('Passwords match:', password);
      //Password creation logic here
      navigate('/'); // Navigate to next page
    } else {
      alert('Passwords do not match or do not meet the requirements. Try again.');
    }
  };

  return (
    <Container maxWidth="sm" className="login-container">
      <Box my={4}>
        <Typography variant="h4" component="h1" align="right" color="secondary" gutterBottom>
          Create your Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkPassword(e.target.value);
            }}
            required
            fullWidth
            margin="normal"
          />
          <List>
            {passwordRequirements.map((requirement) => (
              <ListItem key={requirement.id}>
                <ListItemText primary={requirement.text} />
              </ListItem>
            ))}
          </List>
          <TextField
            label="Confirm Password"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default PasswordPage;