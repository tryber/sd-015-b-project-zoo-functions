const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function animalsNames(animal) {
  const animalNames = { };
  animalNames[animal] = [];
  species.forEach((specie) => {
    if (specie.name === animal) {
      specie.residents.forEach((element) => animalNames[animal].push(element.name));
    }
  });
  return animalNames;
}

function animalsSorted(animal) {
  const animalName = { };
  animalName[animal] = [];
  species.forEach((specie) => {
    if (specie.name === animal) {
      specie.residents.forEach((element) => animalName[animal].push(element.name));
    }
  });
  animalName[animal].sort();
  return animalName;
}

function animalsWithoutParameters() {
  const newObj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((specie) => {
    if (specie.location === 'NE') {
      newObj.NE.push(specie.name);
    } else if (specie.location === 'NW') {
      newObj.NW.push(specie.name);
    } else if (specie.location === 'SE') {
      newObj.SE.push(specie.name);
    } else {
      newObj.SW.push(specie.name);
    }
  });
  return newObj;
}

function animalsWithTrue() {
  const newObj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((specie) => {
    if (specie.location === 'NE') {
      newObj.NE.push(animalsNames(specie.name));
    } else if (specie.location === 'NW') {
      newObj.NW.push(animalsNames(specie.name));
    } else if (specie.location === 'SE') {
      newObj.SE.push(animalsNames(specie.name));
    } else {
      newObj.SW.push(animalsNames(specie.name));
    }
  });
  return newObj;
}

function animalsWithSort() {
  const newObj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((specie) => {
    if (specie.location === 'NE') {
      newObj.NE.push(animalsSorted(specie.name));
    } else if (specie.location === 'NW') {
      newObj.NW.push(animalsSorted(specie.name));
    } else if (specie.location === 'SE') {
      newObj.SE.push(animalsSorted(specie.name));
    } else {
      newObj.SW.push(animalsSorted(specie.name));
    }
  });
  return newObj;
}

function getAnimalMap(options) {
  if (!options) {
    return animalsWithoutParameters();
  } if (!options.sort) {
    return animalsWithTrue();
  }
  return animalsWithSort();
}

module.exports = getAnimalMap;

// console.log(animalsWithTrue());
// console.log(animalsNames('lions'));
console.log(animalsWithSort());
