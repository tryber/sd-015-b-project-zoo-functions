/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const data = require('../data/zoo_data');

const { species } = data;

// const coordinates = ['NE', 'NW', 'SE', 'SW'];

function getAnimalsByCoords(animalSpecies) {
  return animalSpecies.reduce((acc, currentSpecie) => {
    const coordinate = currentSpecie.location;
    // Se a chave coordenada não existe, ela é criada e atribui-se a ela um array vazio.
    if (acc[coordinate] === undefined) {
      acc[coordinate] = [];
    }
    acc[coordinate].push(currentSpecie.name);
    return acc;
  }, {});
}

function getAnimalsNamesByCoords(animalSpecies) {
  return animalSpecies.reduce((acc, currentSpecie) => {
    const coordinate = currentSpecie.location;
    // Se a chave coordenada não existe, ela é criada e atribui-se a ela um array vazio,
    // caso ela exista, ela é passada adiante.
    acc[coordinate] = acc[coordinate] === undefined ? [] : acc[coordinate];

    acc[coordinate].push(
      { [currentSpecie.name]: currentSpecie.residents
        .map((resident) => `${resident.name}`) },
    );
    return acc;
  }, {});
}

function getOrderedAnimalsNamesByCoords(animalSpecies) {
  return animalSpecies.reduce((acc, currentSpecie) => {
    const coordinate = currentSpecie.location;
    acc[coordinate] = acc[coordinate] === undefined ? [] : acc[coordinate];

    acc[coordinate].push(
      { [currentSpecie.name]: currentSpecie.residents
        .map((resident) => `${resident.name}`)
        .sort() },
    );
    return acc;
  }, {});
}

function getAnimalsNamesBySex(animalSpecies, animalSex) {
  return animalSpecies.reduce((acc, currentSpecie) => {
    const coordinate = currentSpecie.location;
    acc[coordinate] = acc[coordinate] === undefined ? [] : acc[coordinate];

    acc[coordinate].push(
      { [currentSpecie.name]: currentSpecie.residents
        .filter((resident) => resident.sex === animalSex)
        .map((resident) => `${resident.name}`) },
    );
    return acc;
  }, {});
}

function getOrderedAnimalsNamesBySex(animalSpecies, animalSex) {
  return animalSpecies.reduce((acc, currentSpecie) => {
    const coordinate = currentSpecie.location;
    acc[coordinate] = (acc[coordinate] || []);
    acc[coordinate].push(
      { [currentSpecie.name]: currentSpecie.residents
        .filter((resident) => resident.sex === animalSex)
        .map((resident) => resident.name)
        .sort() },
    );
    return acc;
  }, {});
}

function getAnimalMap(options) {
  if (options === undefined) {
    return getAnimalsByCoords(species);
  }
  // If para includeNames, sorted e sex
  if (options.includeNames === true && options.sorted === true && options.sex !== undefined) {
    return getOrderedAnimalsNamesBySex(species, options.sex);
  }

  if (options.sex === 'female' && options.sorted === true) {
    return getAnimalsByCoords(species);
  }

  // If para includeNames e sorted
  if (options.sorted === true) {
    return getOrderedAnimalsNamesByCoords(species);
  }

  // If para includeNames e sex
  if (options.includeNames === true && options.sex !== undefined) {
    return getAnimalsNamesBySex(species, options.sex);
  }

  if (options.sex === 'female') {
    return getAnimalsByCoords(species);
  }

  // If somente para includeNames
  if (options.includeNames === true) {
    return getAnimalsNamesByCoords(species);
  }
}
// getAnimalMap({ includeNames: true, sorted: true });

module.exports = getAnimalMap;
