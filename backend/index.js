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

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});