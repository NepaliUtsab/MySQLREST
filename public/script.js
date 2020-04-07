
function loadUsers() {
  const users = [
    {
      "id": 2,
      "firstname": "Johnny",
      "lastname": "Bravo",
      "age": 23
    },
    {
      "id": 5,
      "firstname": "Johnny",
      "lastname": "Bravo",
      "age": 23
    },
    {
      "id": 6,
      "firstname": "Johnny",
      "lastname": "Bravo",
      "age": 23
    },
    {
      "id": 7,
      "firstname": "Johnny",
      "lastname": "Bravo",
      "age": 23
    },
    {
      "id": 8,
      "firstname": "Johnny",
      "lastname": "Bravo",
      "age": 23
    },
    {
      "id": 9,
      "firstname": "Eduardo",
      "lastname": "Reis",
      "age": 22
    }
  ];

  users.forEach((user) => {
    console.log(user);
    fname = document.createElement('td');
    fname.appendChild(document.createTextNode(user.firstname));

    lname = document.createElement('td');
    lname.appendChild(document.createTextNode(user.lastname));

    age = document.createElement('td');
    age.appendChild(document.createTextNode(user.age));

    row = document.createElement('tr');
    row.appendChild(fname);
    row.appendChild(lname);
    row.appendChild(age);

    document.querySelector('tbody').appendChild(row);
  });
}