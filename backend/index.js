const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/signup', (req, res) => {
  // Your sign-up logic here
  console.log(req.body);

  // For now, just return a successful response
  res.status(200).json({ message: 'User signed up successfully' });
});

// New route for creating a user with a password
app.post('/create-user', (req, res) => {
  const userData = req.body;

  console.log('User Data:', userData);

  // Add your user creation logic here
  // For example, you can save the user to a database, send a confirmation email, etc.

  res.status(201).json({ message: 'User created successfully!' });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});