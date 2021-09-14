const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const allAnimals = {};
  if (!animal) {
    species.forEach(({ name, residents }) => {
      allAnimals[name] = residents.length;
    });
    return allAnimals;
  }
  const findAnimal = species.find((specie) => specie.name === animal.specie);
  if (!animal.gender) {
    const residentsFound = findAnimal.residents.length;
    return residentsFound;
  }
  const selectedResidents = findAnimal.residents;
  const filterSex = selectedResidents.filter((resident) => resident.sex === animal.gender);
  return filterSex.length;
}

module.exports = countAnimals;
