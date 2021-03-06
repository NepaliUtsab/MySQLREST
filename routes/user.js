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

/* 
 * The concept of returning all users is not recommended in an actual
 * application since gives away the information of all users
 */
router.get('/users', (request, response) => {
  const connection = getNewConnection();
  const queryString = 'Select * FROM users'

  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.error('Failed to execute query:')
      console.err(queryString)
      console.error(err)
      response.sendStatus(500);
    }
    response.json(rows);
  });
})

router.get('/user/:id', (request, response) => {
  const connection = getNewConnection();
  const queryString = 'Select * FROM users where id = ?'
  const userId = request.params.id

  connection.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.error('Failed to execute query:')
      console.err(queryString)
      console.error(err)
      response.sendStatus(500);
    }
    response.json(rows[0]);
  });
})

router.delete('/user/:id', (request, response) => {
  const connection = getNewConnection();
  const queryString  = 'delete from users where id = ?;'
  const userId = request.params.id;

  connection.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.error('Failed to execute query:')
      console.err(queryString)
      console.error(err)
      response.sendStatus(500);
    }
    response.sendStatus(200);
  });
})

router.post('/user', (request, response) => {
  const connection = getNewConnection();
  const queryString  = 'INSERT INTO users VALUES (NULL, ?, ?, ?);'
  const user = request.body;
  const params = [user.firstName, user.lastName, user.age];

  connection.query(queryString, params, (err, result, fields) => {
    if (err) {
      console.error('Failed to execute query:')
      console.error(queryString)
      console.error(err)
      response.sendStatus(500);
    }
    response.json({id: result.insertId})
  });
})

router.put('/user', (request, response) => {
  const connection = getNewConnection();
  const userId = request.body.id;
  delete request.body.id;

  const newEntries = Object.entries(request.body);
  const newValues = newEntries.map(([key, value]) => {
    return `${key} = '${value}'`;
  }).join(', ');
  const queryString  = `update users set ${newValues} where id = ${userId};`
  connection.query(queryString, null, (err, result, fields) => {
    if (err) {
      console.error('Failed to execute query:')
      console.error(queryString)
      console.error(err)
      response.sendStatus(500);
    }
    console.log(result);
    response.sendStatus(200);
  });
})

module.exports = router;