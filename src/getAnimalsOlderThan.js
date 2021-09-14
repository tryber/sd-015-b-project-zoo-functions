const data = require('../data/zoo_data');

const verifyAge = (specie, age) =>
  Object.values(specie.residents).every((resident) =>
    resident.age >= age);

const findAnimal = (species, animal, age) =>
  species.some((specie) =>
    specie.name === animal && verifyAge(specie, age));

const getAnimalsOlderThan = (animal, age, func = findAnimal) => 
  // seu código aqui
  func(data.species, animal, age);

module.exports = getAnimalsOlderThan;
