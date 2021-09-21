const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function accountAnimals() {
  const accont = species
    .reduce((acc, { name, residents }) => {
      acc[name] = residents.length; return acc;
    }, {});

  return accont;
}

function filterAccountAnimals(specie, gender) {
  const thisSpecie = species.find(({ name }) => name === specie);
  const accont = gender
    ? thisSpecie.residents.filter(({ sex }) =>
      sex === gender).length : thisSpecie.residents.length;

  return accont;
}

function countAnimals(animal) {
  const accont = animal ? filterAccountAnimals(animal.specie, animal.sex) : accountAnimals();

  return accont;
}

module.exports = countAnimals;
