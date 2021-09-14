const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const howAnimal = employees.find((employee) => employee.id.includes(id));

  const firtAnimal = howAnimal.responsibleFor[0];

  const getSpecie = species.find((specie) => specie.id.includes(firtAnimal)).residents;

  const whichOlder = getSpecie.reduce((bigAge, age) => (bigAge.age > age.age ? bigAge : age));

  const olderAnimal = [];

  olderAnimal.push(whichOlder.name);
  olderAnimal.push(whichOlder.sex);
  olderAnimal.push(whichOlder.age);

  return olderAnimal;
}

module.exports = getOldestFromFirstSpecies;
