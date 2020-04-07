const express = require('express');

const app = express();

app.get('/', (request, response) => {
  console.log(`Request received`)
  // response.send('Hello World');
  response.json({message: 'Hello World'});
})

app.listen(3333, () => {
  console.log('The server is up and listening on port 3333')
});