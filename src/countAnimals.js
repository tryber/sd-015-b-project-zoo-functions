const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function createObjAllanimals() {
  const animals = species.map((specie) => ({ name: specie.name, valor: specie.residents.length }));
  const objAnimals = {};
  animals.forEach((e) => {
    objAnimals[e.name] = e.valor;
  });

  return objAnimals;
}

function countAnimals(animal) {
  const allAnimals = createObjAllanimals();
  if (!animal) {
    return allAnimals;
  }
  const { specie, gender } = animal;
  if (specie && gender) {
    const animalSpecie = species.find((a) => a.name === specie);
    const animalGender = animalSpecie.residents.filter((resident) => resident.sex === gender);
    return animalGender.length;
  }
  if (!gender) {
    const animalResidents = allAnimals[specie];
    return animalResidents;
  }
}

module.exports = countAnimals;
