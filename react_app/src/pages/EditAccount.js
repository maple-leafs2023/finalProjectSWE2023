import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Container, Typography, Button } from '@mui/material';
import UserContext from './UserContext';
import axios from 'axios';

const EditAccount = () => {
  const { user, setUser } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/user/${user.id}`); // Replace with your API endpoint
        const userData = response.data;
        setUser(userData);
        setPassword(userData.password);

        // Set the form values
        Object.keys(userData).forEach((key) => {
          setValue(key, userData[key]);
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (user && user.id) {
      fetchUserData();
    }
  }, [user, setValue, setUser]); // Add closing bracket and setValue to the dependencies array

  const onSubmit = async (data) => {
    const updatedUser = { ...user, ...data, password };
    setUser(updatedUser);

    try {
        await axios.put(`http://localhost:5001/user/${user.id}`, updatedUser);
        console.log('User updated successfully');
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="right" color="secondary" sx={{ marginTop: '2rem' }} gutterBottom>
        Edit Account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {[
          { label: 'First Name', key: 'firstName', required: true },
          { label: 'Last Name', key: 'lastName', required: true },
          { label: 'Email Address', key: 'email', required: true },
          { label: 'Cell Phone', key: 'cellPhone', required: true },
          { label: 'Hours available to volunteer per month', key: 'hours', required: true },
          { label: 'Postal Address', key: 'address', required: true },
          { label: 'City', key: 'city', required: true },
          { label: 'State', key: 'state', required: true },
          { label: 'Postal Code', key: 'postalCode', required: true },
          { label: 'Territory', key: 'territory', required: false },
        ].map(({ label, key, required }) => (
          <div key={key}>
            <TextField
              label={label}
              defaultValue={user[key]}
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
        <Button type="submit" variant="contained" size="normal" color="primary">
          Update Account
        </Button>
      </form>
    </Container>
  );
};

export default EditAccount;