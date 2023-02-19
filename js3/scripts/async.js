(async () => {
  const baseUrl = 'http://localhost:8000';
  const key = '6b6e8a54-affd-11ed-afa1-0242ac120002';

  // BASIC RESPONSE
  try {
    const response = await fetch(`${baseUrl}/user`);
    console.log('then', response);
  } catch (err) {
    console.log('catch', err);
  }
  // BASIC RESPONSE

  // ERROR HANDLING
  try {
    const response = await fetch(`${baseUrl}/user`);
    if (!response.ok) throw 'not OK status';
    console.log('then', response);
  } catch (err) {
    console.log('catch', err);
  }
  // ERROR HANDLING

  // FIX ERROR AND PARSE RESPONSE
  try {
    const headers = { key };
    const response = await fetch(`${baseUrl}/user`, { headers });
    console.log(response);
  } catch (err) {
    console.log(err);
  }

  try {
    const headers = { key };
    const response = await fetch(`${baseUrl}/user`, { headers });
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
  // FIX ERROR AND PARSE RESPONSE

  // POST
  try {
    const method = 'POST';
    const headers = { 'Content-Type': 'application/json', key };
    const newUser = {
      firstName: 'Test',
      lastName: 'Testis',
      image: `https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png`,
    };
    const body = JSON.stringify(newUser);
    const options = { method, headers, body };
    const response = await fetch(`${baseUrl}/create`, options);
    const json = await response.json();

    if (!json.userId) throw 'no userId';
    console.log('Created user ' + json.userId);

    let user = await fetch(`${baseUrl}/user/${json.userId}`, { headers });
    user = await user.json();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
  // POST
})();

// ZADATAK #1
// S rute ${baseUrl}/user dohvatite random korisnika.
// Kreirajte njegov profil - prikažite njihovu sliku, ime i prezime.

// ZADATAK #2
// Napravite formu za kreaciju novog usera.
// Podatke za kreaciju šaljete na ${baseUrl}/create.
// Ako kreacija korisnika uspije, profil kreiranog korisnika prikažite ispod forme.
