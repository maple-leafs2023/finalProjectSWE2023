import React from 'react';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import PasswordPage from './pages/PasswordPage';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Default theme (light)
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Custom theme
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

// Choose the theme you want to use
const theme = customTheme; // You can replace 'customTheme' with 'lightTheme' or 'darkTheme' for the default themes

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password" element={<PasswordPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;