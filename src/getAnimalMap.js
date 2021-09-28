const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];

// retorna os animais de uma localização
function animalsLocations(location) {
  return species.filter((animal) => animal.location === location).map((animal) => animal.name);
}

// retorna um objeto com os locais e os animais
function locationsObj() {
  return locations.reduce((acc, location) => {
    acc[location] = animalsLocations(location);
    return acc;
  }, {});
}

const animalsObj = locationsObj();

// cria o array com os nomes dos animais
function createArrayNames(animalName) {
  return species.find((animal) => animal.name === animalName)
    .residents.map((animal) => animal.name);
}

// cria o array de acordo com o sexo
function createArrayBySex(animalName, options) {
  const animalSerch = species.find((animal) => animal.name === animalName);
  const byGender = animalSerch.residents.filter((animal) => animal.sex === options.sex);
  return byGender.map((animal) => animal.name);
}

// modifica o array com os nomes dos animais
function animalsNames(animalName, options) {
  const arrayNames = createArrayNames(animalName);
  const arrayNameSort = createArrayBySex(animalName, options);
  if (options.sorted && options.sex) {
    return arrayNameSort.sort();
  }

  if (options.sorted) {
    return arrayNames.sort();
  }

  if (options.sex) {
    return createArrayBySex(animalName, options);
  }

  return arrayNames;
}

console.log(animalsNames('lions', { includeNames: true, sex: 'female', sorted: true }));

// cria um array com de objetos que são o nome da especie e o nome dos animas dessa especie
function createNamesObj(location, options) {
  return animalsObj[location].map((animal) => (({ [animal]: animalsNames(animal, options) })));
}

// cria o objeto so com as direçoes e nomes de species
function locationObjectNames(options) {
  return locations.reduce((acc, location) => {
    acc[location] = createNamesObj(location, options);
    return acc;
  }, {});
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return locationsObj();
  }

  if (!options.includeNames) {
    return locationsObj();
  }

  if (options) {
    return locationObjectNames(options);
  }
}

module.exports = getAnimalMap;
