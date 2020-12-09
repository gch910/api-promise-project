const { writeFile, promises } = require("fs");
const fetch = require("node-fetch");

const getFilms = (films) => {
  const filmPromises = films.map((film) => {
    return fetch(film)
      .then((res) => res.json())
      .then((film) => film.title);
  });
  return Promise.all(filmPromises);
};

const getPlanet = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((planet) => planet.name);
};

const formatString = (data) => {
  const string = `My name is ${data.person.name} and I am from ${
    data.planet
  }.\nI starred in the following films: ${data.films.join(", ")}.`;

  console.log(string);
  return string;
};

const getData = () => {
  let data = {};
  return new Promise((res, rej) => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json()) 
      .then((person) => {
        data.person = person;
        return person;
      })
      .then((person) => getFilms(person.films))
      .then((filmsArray) => {
        data.films = filmsArray;
        return data;
      })
      .then((data) => getPlanet(data.person.homeworld))
      .then((planet) => {
        data.planet = planet;
        return res(data);
      });
  });
};
getData().then((data) => formatString(data));

//fetch planet
// fetch("https://swapi.dev/api/planets/1")
//   .then((res) => res.json())
//   .then((planet) => console.log(planet.name));

//  fs.writeFile("film-info.txt", filmString())
