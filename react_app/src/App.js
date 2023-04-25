import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import PasswordPage from './pages/PasswordPage';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './pages/HomePage'; 
import UserContext from './pages/UserContext';
import EditAccount from './pages/EditAccount';

/*// Default theme (light)
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
*/
// Custom theme
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#588157',
    },
    secondary: {
      main: '#344E41',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

// Theme chooser - light/dark theme is commented out
const theme = customTheme; // You can replace 'customTheme' with 'lightTheme' or 'darkTheme' for the default themes


function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Set HomePage as the default route */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password" element={<PasswordPage />} />
            <Route path="/edit-account" element={<EditAccount/>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;