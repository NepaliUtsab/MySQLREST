const express = require('express');

const app = express();
app.use(express.json());

// app.get('/', (request, response) => {
app.get('/users', (request, response) => {
  console.log(`Request received`)

  /* Query Params */
  console.log(`Query ${request.query}`)
  console.log('Query ' + request.query)
  console.log(request.query)
  console.log(`Query ${JSON.stringify(request.query)}`)
  console.log(`Query ${request.query['name']}`)
  response.json({message: 'Hello World'});
})

app.delete('/users/:id/:age', (request, response) => {
  console.log(`Request received`)

  /* Route Params */
  console.log(request.params)

  response.json({message: 'Hello World'});
})

app.post('/users', (request, response) => {
  console.log(`Request received`)

  /* 
   * Body Params. By default returns undefined. 
   * Enable json on the root of express to interpret it properly through out
   * the app.
   */
  console.log(request.body)

  response.json({message: 'Hello World'});
})

app.listen(3333, () => {
  console.log('The server is up and listening on port 3333')
});