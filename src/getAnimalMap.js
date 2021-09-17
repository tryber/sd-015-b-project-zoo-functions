const data = require('../data/zoo_data');

const { species } = data;

// Requisito entendido e realizado com base no código do Gustavo Souza
// https://github.com/tryber/sd-015-b-project-zoo-functions/blob/gustavosouza-zoo-functions-project/src/getAnimalMap.js

function getAnimalSex(residents, sex) {
  const animals = sex === undefined
    ? residents
    : residents.filter((resident) => resident.sex === sex);

  return animals.map((animal) => animal.name);
}

function getAnimalsName(arr, options) {
  return arr.map((animal) => {
    const selectedAnimal = species.find((specie) => specie.name === animal).residents;
    const residents = getAnimalSex(selectedAnimal, options.sex);

    if (options.sorted) {
      residents.sort();
    }

    const result = {};

    result[animal] = residents;

    return result;
  });
}

function getAnimalsByLocation(local, options) {
  let result;

  const animalsByLocation = species.filter((specie) =>
    specie.location === local).map((animal) => animal.name);

  if (options !== undefined && options.includeNames === true) {
    result = getAnimalsName(animalsByLocation, options);
  } else {
    result = animalsByLocation;
  }

  return result;
}

function getAnimalMap(options) {
  const result = {};

  const locals = [...new Set(species.map((specie) => specie.location))];

  locals.forEach((local) => {
    result[local] = getAnimalsByLocation(local, options);
  });

  return result;
}

module.exports = getAnimalMap;
