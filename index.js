const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors')
//const crypto = require('crypto');
const pkg = require('./package.json');


// App constants
const port = process.env.PORT || 3000;

// Create the Express app & setup middlewares
const app = express();

// Configure routes
const router = express.Router();

// Hello World for index page
app.get('/', function (req, res) {
    return res.send("Hello World!");
})

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
  
