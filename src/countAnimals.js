const data = require('../data/zoo_data');

function animalsList() {
  const animalObj = data.species.reduce((speciesList, residents) => {
    const listOfResidents = speciesList;
    listOfResidents[residents.name] = residents.residents.length;
    return listOfResidents;
  }, {});
  return animalObj;
}

function ungenderAnimals(animal) {
  const specieOfAnimal = data.species.find((list) => list.name === animal.specie);
  return specieOfAnimal.residents.length;
}

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return animalsList();
  }
  if (animal.sex === undefined) {
    return ungenderAnimals(animal);
  }
  const specieOfAnimal = data.species.find((specie) => specie.name === animal.specie);
  const genderOfResidents = specieOfAnimal.residents.filter((gender) => gender
    .sex === animal.sex).length;
  return genderOfResidents;
}

module.exports = countAnimals;
