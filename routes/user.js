/* 
 * Contains all user related routes
 */

const express = require('express')
const router = express.Router()

/* 
 * Router can be handled in a very similar way as app
 */

/* 
 * The concept of returning all users is not recommended in an actual
 * application since gives away the information of all users
 */
router.get('/users', (request, response) => {
  const user1 = { first_name : 'John', last_name: 'Doe', age: '20', }
  const user2 = { first_name : 'Peter', last_name: 'Rock', age: '54', }
  response.json([user1, user2]);
})

router.get('/user/:id', (request, response) => {
  // console.log(`Fetching user with id: ${request.params['id']}`)
  console.log(`Fetching user with id: ${request.params.id}`) // More elegant
  const user1 = { first_name : 'John', last_name: 'Doe', age: '20', }
  response.json(user1);
})

router.delete('/user/:id', (request, response) => {
  console.log(`Deleting user with id: ${request.params.id}`)
  const user1 = { first_name : 'John', last_name: 'Doe', age: '20', }
  response.json(user1);
})

router.post('/user', (request, response) => {
  console.log(`Adding user: `, request.body)
  const user1 = { first_name : 'John', last_name: 'Doe', age: '20', }
  response.json(user1);
})

module.exports = router;