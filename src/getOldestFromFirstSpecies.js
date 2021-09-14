const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idAnimal = employees.find((person) => person.id === id).responsibleFor[0];
  const listOfAnimals = species.find((specie) => specie.id === idAnimal).residents;
  const oldest = listOfAnimals.reduce((older, animal) => (older.age > animal.age ? older : animal));
  const { name, sex, age } = oldest;
  const array = [];
  array.push(name);
  array.push(sex);
  array.push(age);
  return array;
}

module.exports = getOldestFromFirstSpecies;
