const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const spec = employees.find((element) => element.id === id).responsibleFor[0];
  const bicho = species.find((element) => element.id === spec).residents;
  const old = bicho.sort((age1, age2) => age2.age - age1.age)[0];
  return [old.name, old.sex, old.age];
}

module.exports = getOldestFromFirstSpecies;
console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
