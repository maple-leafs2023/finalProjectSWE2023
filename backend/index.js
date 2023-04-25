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
  // For now, just return a successful response
  res.status(200).json({ message: 'User signed up successfully' });
});

// New route for creating a user with a password
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

  res.status(201).json({ message: 'User created successfully!' });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
