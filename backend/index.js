const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// Routes
app.post('/signup', (req, res) => {
  // Your sign-up logic here
  console.log(req.body);
  console.log("first name = " + req.body.firstName)
  // For now, just return a successful response
  res.status(200).json({ message: 'User signed up successfully' });
});

// Route for creating a user with a password
app.post('/create-user', (req, res) => {
  
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var email = req.body.email;
  var cellPhone = req.body.cellPhone;
  var hours = req.body.hours; 
  var address = req.body.address;
  var password = req.body.password;

  var params = {
    TableName: 'mapleLeafs',
    Item: {
      'username' : {S: email},
      'firstName' : {S: firstName},
      'lastName': {S:lastName},
      'cellPhone' : {S: cellPhone},
      'hours':{N:hours},
      'address' :{S:address},
      'password':{S:password}
    }
  };

  // Call DynamoDB to add the item to the table
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });

  // For now, just return a successful response
  res.status(200).json({ message: 'User created successfully' });
});

// Route for updating user data
app.put('/user/:id', (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  console.log(`Updating user with ID: ${userId}`);
  console.log('User Data:', userData);

  // Add your user updating logic here
  // For example, you can update the user data in the database

  res.status(200).json({ message: 'User updated successfully!' });
});
 
// route for checking login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const params = {
    TableName: 'mapleLeafs',
    Key: {
      'username': { S: email },
    },
  };

  try {
    const { Item } = await ddb.getItem(params).promise();

    if (Item && Item.password && Item.password.S === password) {
      res.status(200).json({ message: 'Login successful', user: Item });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Error occurred while processing your request' });
  }
});
// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});