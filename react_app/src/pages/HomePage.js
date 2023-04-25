import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          color="secondary"
          gutterBottom
        >
        <Button 
        variant="contained" 
        color="primary"
        justifyContent="right"
        onClick={() => navigate('/edit-account')}
        sx={{ marginTop: 2, marginBottom: 1 }}
        gutterBottom
        >
        Edit Account
      </Button>
          Food Bank Volunteer Management System
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/login')}
          sx={{ marginTop: 2, marginBottom: 1 }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/signup')}
          sx={{ marginTop: 1, marginBottom: 2 }}
        >
          Create Account
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;