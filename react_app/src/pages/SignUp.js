import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5001/signup', data);

      console.log(response.data);

      navigate('/password');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" 
      component="h1" 
      align="right" 
      color="secondary" 
      gutterBottom>
        Create your Account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {[
          { label: 'First Name - Required', key: 'firstName', required: true },
          { label: 'Last Name - Required', key: 'lastName', required: true },
          { label: 'Email Address - Required', key: 'email', required: true },
          { label: 'Cell Phone - Required', key: 'cellPhone', required: true },
          { label: 'Number of Hours available to volunteer per month - Required', key: 'hours', required: true },
          { label: 'Postal Address - Required', key: 'address', required: true },
          { label: 'City - Required', key: 'city', required: true },
          { label: 'State - Required', key: 'state', required: true },
          { label: 'Postal Code - Required', key: 'postalCode', required: true },
          { label: 'Territory - Not Required', key: 'territory', required: false },
        ].map(({ label, key, required }) => (
          <div key={key}>
            <TextField
              label={label}
              {...register(key, { required })}
              error={!!errors[key]}
              helperText={errors[key] && 'This field is required'}
              fullWidth
              sx={{ marginTop: 1.2, marginBottom: 1.2 }}
              margin="sx"
              variant="outlined"
              size="small"
            />
          </div>
        ))}
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;