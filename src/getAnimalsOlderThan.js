const { name } = require('faker');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const verify = data.species.find((Element) => Element.name === animal);
  return verify.residents.every((Element) => Element.age >= age)
}

module.exports = getAnimalsOlderThan;
