const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function showAllAnimals() {
  const allSpeciesArray = species.map((specie) => specie.name);
  const howManyAnimalsResidents = species.map((specie) => specie.residents.length);
  const animalsAndResidentsObject = species.reduce((acc, _, i) => {
    acc[allSpeciesArray[i]] = howManyAnimalsResidents[i];
    return acc;
  }, {});
  return animalsAndResidentsObject;
}

function countAnimals(animal, gender) {
  const animalsAndResidentsObject = showAllAnimals();
  if (!animal) return animalsAndResidentsObject;

  const a = Object.values(animal)[0];
  const keys = Object.values(animal);

  if (keys.length < 2) return animalsAndResidentsObject[a];

  const g = Object.values(animal)[1];

  const x = species.find((e) => e.name === a).residents.filter((e) => e.sex === g).length;

  return x;
}

module.exports = countAnimals;
