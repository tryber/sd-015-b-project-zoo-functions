const data = require('../data/zoo_data');

const { species } = data;
function getAllAnimals() {
  const animalOccurrences = {};
  species.forEach((obj) => {
    animalOccurrences[obj.name] = obj.residents.length;
  });
  return animalOccurrences;
}

function getNoSexAnimal(animal) {
  const { specie: myAnimal } = animal;
  const { residents } = species.find((obj) => obj.name.includes(myAnimal.slice(0, -2)));

  return residents.length;
}

function getAnimal(animal) {
  const { specie: myAnimal, sex: animalSex } = animal;
  const { residents } = species.find((obj) => obj.name.includes(myAnimal.slice(0, -2)));
  const genderResidents = residents.filter(({ sex }) => sex === animalSex);

  return genderResidents.length;
}

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return getAllAnimals();
  }

  const { sex: animalSex } = animal;
  if (animalSex === undefined) {
    return getNoSexAnimal(animal);
  }

  return getAnimal(animal);
}

module.exports = countAnimals;
