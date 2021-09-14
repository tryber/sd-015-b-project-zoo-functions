const data = require('../data/zoo_data');

const { species } = data;
const obj = {};

function nullAnimals() {
  species.forEach((element) => {
    obj[element.name] = element.residents.length;
  });
  return obj;
}

function selectedAnimals({ specie, sex }) {
  let { residents } = species.find((x) => x.name === specie);
  residents = !sex ? residents : residents.filter((resident) => resident.sex === sex);
  return residents.length;
}
selectedAnimals({ specie: 'bears', sex: 'female' })

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return nullAnimals();
  }
  return selectedAnimals(animal);
}

module.exports = countAnimals;
