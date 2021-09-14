const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAllSpecies() {
  const allSpecies = { };
  species.forEach(({ name, residents } = species) => {
    allSpecies[name] = residents.length;
  });
  return allSpecies;
}
function countSpeciesByGender(animals, gender) {
  let count = 0;
  animals.forEach(({ sex } = animals) => {
    if (sex === gender) {
      count += 1;
    }
  });
  return count;
}
function countSpeciesByName(animal) {
  const filteredSpecie = species.find(({ name } = species) => name === animal.specie);

  if (Object.keys(animal).length === 1) {
    return filteredSpecie.residents.length;
  }
  return countSpeciesByGender(filteredSpecie.residents, animal.gender);
}
function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return countAllSpecies();
  }
  return countSpeciesByName(animal);
}

module.exports = countAnimals;
