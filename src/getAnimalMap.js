const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function returnNames(animal, needAppend) {
  console.log('needAppend:', needAppend);
  const currentAnimal = species.find((element) => element.name === animal);
  const residentsNames = currentAnimal.residents.map((item) => item.name);
  // console.log('residentsNames:', residentsNames);
  needAppend.forEach((element) => element[Object.keys(element)[0]].push(residentsNames));
  needAppend.
  return residentsNames;
}

function getName(needAppendNames) {
  for (let i = 0; i < needAppendNames.length; i += 1) {
    const index = needAppendNames[i];
    const animalName = Object.keys(index)[0];
    returnNames(animalName, needAppendNames);
  }
}

function createObject(animals) {
  const needAppendNames = animals.map((element) => ({ [element]: [] }));
  getName(needAppendNames);
}

function doIncludeNames(locations) {
  const keys = Object.keys(locations);
  for (let i = 0; i < keys.length; i += 1) {
    createObject(locations[keys[i]]);
  }
  // console.log(locations)
}

function getAnimalMap(options) {
  const locations = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  // makes object location: name
  data.species.forEach((specie) => locations[specie.location].push(specie.name));
  if (options.includeNames) {
    doIncludeNames(locations);
  }
}

getAnimalMap({ includeNames: true });
module.exports = getAnimalMap;
