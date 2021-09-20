const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const animalObject = {};
  const animalArray = [];
  if (!animal) {
    species.forEach((specie) => {
      animalArray.push([specie.name, specie.residents.length]);
    });
    animalArray.sort().forEach(([name, residents]) => {
      animalObject[name] = residents;
    });
    return animalObject;
  }
  const selectedSpecie = species.find((specie) => specie.name === animal.specie);
  if (animal.gender) {
    const selectGender = (resident) => resident.sex === animal.gender;
    const selectedGender = selectedSpecie.residents.filter(selectGender);
    return selectedGender.length;
  }
  return selectedSpecie.residents.length;
}

console.log(countAnimals());

module.exports = countAnimals;
