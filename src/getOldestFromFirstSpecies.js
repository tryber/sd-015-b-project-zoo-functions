const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(idPeople) {
  const findAnimalById = employees.filter(({ id }) => id === idPeople)
    .map(({ responsibleFor }) => responsibleFor).shift();

  const getAnimalByPeople = species.filter(({ id }) => id === findAnimalById[0]);
  const animalresidents = getAnimalByPeople[0].residents;
  const oldAgeAnimal = animalresidents.map(({ age }) => age).reduce((a, b) => Math.max(a, b), 0);
  return Object.values(animalresidents.find((animal) => animal.age === oldAgeAnimal));
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
