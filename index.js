const fetch = require("node-fetch");

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => res.json())
//   .then((person) => console.log(person.name));



fetch("https://swapi.dev/api/planets/1")
  .then((res) => res.json())
  .then((planet) => console.log(planet.name));



Promise.all([
    fetch('http://swapi.dev/api/films/1/'),
    fetch( 'http://swapi.dev/api/films/2/'),
    fetch('http://swapi.dev/api/films/3/'),
    fetch('http://swapi.dev/api/films/6/')
    
])
.then(results => console.log(results));


