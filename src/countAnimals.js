const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal, gender) {
  const allAnimals = {};
  if (!animal) {
    species.forEach(({ name, residents }) => {
      allAnimals[name] = residents.length;
    });
    return allAnimals;
  }
  const findAnimal = species.find((specie) => specie.name === animal);
  const residentsFound = findAnimal.residents.length;
  if (animal && gender) {
    const selectedResidents = findAnimal.residents;
    const filterSex = selectedResidents.filter((resident) => resident.sex === gender);
    return filterSex.length;
  }
  return residentsFound;
}

console.log(countAnimals('giraffes', 'female'));
module.exports = countAnimals;
