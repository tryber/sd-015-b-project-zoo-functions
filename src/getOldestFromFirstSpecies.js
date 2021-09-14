const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((elem) => elem.id === id).responsibleFor[0];
  const obj = species.find((specie) => specie.id === animal).residents;
  const calculateAge = obj.map((elem) => elem.age).reduce((acc, value) => Math.max(acc, value));
  return obj.reduce((a, { name, age, sex }) => (age === calculateAge
    ? [name, sex, age] : a), []);
}

module.exports = getOldestFromFirstSpecies;
