const personJson = '{"firstName":"Bartol","lastName":"Deak", "age":30}';
const person = JSON.parse(personJson);

console.log(person);
console.log(JSON.stringify(person));

person.friends = [
  {
    firstName: 'Marica',
    age: 10,
  },
  {
    firstName: 'Alojzije',
    age: 7.5,
  },
];

console.log(JSON.stringify(person));
