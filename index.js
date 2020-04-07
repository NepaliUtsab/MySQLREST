const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(morgan('combined'));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));

const router = require('./routes/user.js')
app.use(router)

app.listen(3333, () => {
  console.log('The server is up and listening on port 3333')
});