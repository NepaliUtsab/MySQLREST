/* 
 * Contains all user related routes
 */

const mysql = require('mysql')
const express = require('express')
const router = express.Router()

function getNewConnection() {
  return mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'IM215',
  })
}

// router.get('/testdb', (request, response) => {
//   const connection = getNewConnection();
//   const queryString = 'Select * FROM users'

//   connection.query(queryString, (err, rows, fields) => {
//     console.log('Something happened');
//     response.json(rows);
//     console.log('Logging')
//     console.log(err)
//     console.log(rows)
//     console.log(fields)
//   });
// });

/* 
 * Router can be handled in a very similar way as app
 */

/* 
 * The concept of returning all users is not recommended in an actual
 * application since gives away the information of all users
 */
router.get('/users', (request, response) => {
  const connection = getNewConnection();
  const queryString = 'Select * FROM users'

  connection.query(queryString, (err, rows, fields) => {
    if (err != null) {
      console.error(err)
      response.sendStatus(500);
    }
    response.json(rows);
  });
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