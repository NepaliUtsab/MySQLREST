const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('combined'));

/* 
 * The concept of returning all users is not recommended in an actual
 * application since gives away the information of all users
 */
app.get('/users', (request, response) => {
  const user1 = { first_name : 'John', last_name: 'Doe', age: '20', }
  const user2 = { first_name : 'Peter', last_name: 'Rock', age: '54', }
  response.json([user1, user2]);
})

app.get('/user/:id', (request, response) => {
  // console.log(`Fetching user with id: ${request.params['id']}`)
  console.log(`Fetching user with id: ${request.params.id}`) // More elegant
  const user1 = { first_name : 'John', last_name: 'Doe', age: '20', }
  response.json(user1);
})

app.delete('/user/:id', (request, response) => {
  console.log(`Deleting user with id: ${request.params.id}`)
  const user1 = { first_name : 'John', last_name: 'Doe', age: '20', }
  response.json(user1);
})

app.post('/user', (request, response) => {
  console.log(`Adding user: `, request.body)
  const user1 = { first_name : 'John', last_name: 'Doe', age: '20', }
  response.json(user1);
})

app.listen(3333, () => {
  console.log('The server is up and listening on port 3333')
});