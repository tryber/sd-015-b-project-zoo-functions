const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function returnNames(animal) {
  const currentAnimal = species.find((element) => element.name === animal);
  const animalResidents = currentAnimal.residents.map((item) => item.name);
  console.log(animalResidents);  
}

returnNames('lions');

function createValues(array) {
  console.log(array)
  const newArray = array.map((animal) => species.find((animale) => animale.residents))
  // console.log(newArray)
}

function doIncludeNames(locations) {
  const keys = Object.keys(locations);
  for (let i = 0; i < keys.length; i += 1) {
    createValues(locations[keys[i]]);
  }
  // console.log(locations)
}

function getAnimalMap(options) {
  let locations = {
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

// getAnimalMap({ includeNames: true });
module.exports = getAnimalMap;
