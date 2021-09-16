const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(idEmployee) {
  // seu código aqui
  let objectAnimal = {};
  const responsibleForWho = employees
    .find(({ id }) => id === idEmployee).responsibleFor
    .filter((idAnimal) => species
      .find((specie) => specie.id === idAnimal).name)[0];
  const residentsFor = species.find((specie) => specie.id === responsibleForWho).residents;
  objectAnimal = residentsFor.reduce((accumulator, element) => {
    let acc = accumulator;
    if (acc.age < element.age) {
      acc = element;
    }
    return acc;
  }, { age: 0 });
  const { name, sex, age } = objectAnimal;
  const array = [name, sex, age];
  return array;
}

module.exports = getOldestFromFirstSpecies;
