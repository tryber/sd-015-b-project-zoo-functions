const data = require('../data/zoo_data');

function filterBySpecie(arr, specie) {
  return arr.filter((element) => element.name === specie);
}

function filterByGender(arr, gender) {
  return arr.map((element) => {
    const actual = element;
    actual.residents = actual.residents.filter((resident) => resident.sex === gender);
    return actual;
  });
}

function filterByGenderAndSpecie(gender, specie) {
  let animalFiltered = data.species;
  animalFiltered = specie ? filterBySpecie(animalFiltered, specie) : animalFiltered;
  animalFiltered = gender ? filterByGender(animalFiltered, gender) : animalFiltered;
  return animalFiltered;
}

function countAnimals(animal) {
  if (animal) {
    const { specie, gender } = animal;
    const animalFiltered = filterByGenderAndSpecie(gender, specie);
    return animalFiltered.reduce((acc, curr) => acc + curr.residents.length, 0);
  }
  const object = {};
  data.species.forEach((element) => {
    object[element.name] = element.residents.length;
  });
  return object;
}

module.exports = countAnimals;
