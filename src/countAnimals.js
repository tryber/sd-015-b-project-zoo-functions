const data = require('../data/zoo_data');

function countAnimals(animal) {
  const allAnimals = data.species;
  if (!animal) {
    return allAnimals.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  const selectedAnimal = allAnimals.find((specie) => specie.name === animal.specie);
  if (!animal.gender) return selectedAnimal.residents.length;
  const residentsByGender = selectedAnimal.residents.filter((spc) => spc.sex === animal.gender);
  return residentsByGender.length;
}

module.exports = countAnimals;
