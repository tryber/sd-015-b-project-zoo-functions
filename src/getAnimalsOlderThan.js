const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const obj = species.find((element) => element.name === animal);
  const booleanReturnAge = obj.residents.every((elem) => elem.age >= age);
  return booleanReturnAge;
}

module.exports = getAnimalsOlderThan;
