// HTTP, what is that - protocol and basis for internet communication
// Server and client communication through requests and responses
// REQUEST:
//   - can be GET, POST, PUT, PATCH, DELETE
//   - has headers, body and query for sending params
//   - takes time -> will be async -> we can do background 💩
// RESPONSE:
//   - has status code (1** - info, 2** - good, 3** - redirect, 4** - user f*cked up, 5** - developer f*cked up)
//   - has message/data

const baseUrl = 'http://localhost:8000';

// BASIC RESPONSE
fetch(`${baseUrl}/user`)
  .then((response) => console.log('then', response))
  .catch((error) => console.log('catch', error));
// BASIC RESPONSE

// ERROR HANDLING
fetch(`${baseUrl}/user`)
  .then((response) => {
    if (!response.ok) throw 'not OK status';
    console.log('then', response);
  })
  .catch((error) => console.log('catch', error));
// ERROR HANDLING

// FIX ERROR AND PARSE RESPONSE
const key = '6b6e8a54-affd-11ed-afa1-0242ac120002';

fetch(`${baseUrl}/user`, {
  headers: { key },
})
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

fetch(`${baseUrl}/user`, {
  headers: { key },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
// FIX ERROR AND PARSE RESPONSE

// POST
fetch(`${baseUrl}/create`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    key,
  },
  body: JSON.stringify({
    firstName: 'Test',
    lastName: 'Testis',
    image: `https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png`,
  }),
})
  .then((response) => response.json())
  .then((json) => {
    if (!json.userId) return;
    console.log('Created user ' + json.userId);
    fetch(`${baseUrl}/user/${json.userId}`, {
      headers: {
        'Content-Type': 'application/json',
        key,
      },
    })
      .then((user) => user.json())
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  })
  .catch((error) => console.log(error));
// POST
