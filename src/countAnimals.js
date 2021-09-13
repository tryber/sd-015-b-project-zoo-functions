const data = require('../data/zoo_data');

function filterBySpecie(arr, specie) {
  return arr.filter((element) => element.name === specie);
}

function filterByGender(arr, gender) {
  return arr.map((element) => {
    element.residents = element.residents.filter((resident) => resident.sex === gender);
    return element;
  });
}

function countAnimals(animal) {
  if (animal) {
    const {specie, gender} = animal;
    let animalFiltered = data.species;
    animalFiltered = specie ? filterBySpecie(animalFiltered, specie) : animalFiltered;
    animalFiltered = gender ? filterByGender(animalFiltered, gender) : animalFiltered;
    return animalFiltered.reduce((acc, curr) => acc + curr.residents.length, 0);
  } else {
    const object = {};
    data.species.forEach((element) => {
      object[element.name] = element.residents.length;
    });
    return object;
  }
}

module.exports = countAnimals;
