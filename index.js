const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('combined'));

const router = require('./routes/user.js')
app.use(router)

app.get('/', (request, response) => {
  /* Sending Messages */
  // response.send('Welcome to our website');

  /* Sending Status Code
  // response.sendStatus(200)
  // response.sendStatus(403)
  // response.sendStatus(404)
  // response.sendStatus(500)

  /* Ending connection, sends nothing */
  /* Seems to be not needed anymore, unless nothing is done/called. */
  // response.end();

});

app.listen(3333, () => {
  console.log('The server is up and listening on port 3333')
});