const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function makeAnimalsArray() {
  const animalObject = {};
  const animalArray = [];
  species.forEach((specie) => {
    animalArray.push([specie.name, specie.residents.length]);
  });
  animalArray.sort().forEach(([name, residents]) => {
    animalObject[name] = residents;
  });
  return animalObject;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return makeAnimalsArray();
  }
  const selectSpecie = (specie) => specie.name === animal.specie;
  const selectedSpecie = species.find(selectSpecie);
  if (animal.gender) {
    const selectGender = (resident) => resident.sex === animal.gender;
    const selectedGender = selectedSpecie.residents.filter(selectGender);
    return selectedGender.length;
  }
  return selectedSpecie.residents.length;
}

console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
console.log(countAnimals());

module.exports = countAnimals;
