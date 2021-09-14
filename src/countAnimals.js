const data = require('../data/zoo_data');

const { species } = data;
const obj = {};

function nullAnimals() {
  species.forEach((element) => {
    obj[element.name] = element.residents.length;
  });
  return obj;
}

function selectedAnimals({ specie, gender }) {
  let { residents } = species.find((x) => x.name === specie);
  residents = !gender ? residents : residents.filter((resident) => resident.sex === gender);
  return residents.length;
}

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return nullAnimals();
  }
  return selectedAnimals(animal);
}

module.exports = countAnimals;
