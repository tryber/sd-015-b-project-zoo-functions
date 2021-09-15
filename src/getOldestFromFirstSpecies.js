const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// consultei o diretório do Denis Jonathan para resolver essa parte, utilizei a função findOldest criada por ele e utilizei da mesma lógica para o desenvolvimento do restante
// source: https://github.com/tryber/sd-015-b-project-zoo-functions/blob/denis-jonathan-zoo-functions-project/src/getOldestFromFirstSpecies.js

function findOldest(animals) {
  const oldest = animals.reduce((accumulator, current) => {
    let older = accumulator;
    const { age } = current;

    if (age > older) {
      older = age;
    }
    return older;
  }, 0);

  return oldest;
}

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = employees.find((name) => name.id === id);

  const idFirstSpecie = selectedEmployee.responsibleFor[0];
  const findSpecie = species.find((animal) => animal.id === idFirstSpecie);

  const { residents } = findSpecie;
  const findOlder = residents.find((resident) => resident.age === findOldest(residents));

  const older = [findOlder.name, findOlder.sex, findOlder.age];

  return older;
}

module.exports = getOldestFromFirstSpecies;
