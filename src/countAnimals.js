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
  const lookFor = animal;
  const residents = animalsAndResidentsObject[animal];

  if (!animal) return animalsAndResidentsObject;

  if (!gender) return { [lookFor]: residents };

  const x = species.find((e) => e.name === animal).residents.filter((e) => e.sex === gender).length;
  return { [animal]: x };
}
console.log(countAnimals('bears', 'female'));

module.exports = countAnimals;
