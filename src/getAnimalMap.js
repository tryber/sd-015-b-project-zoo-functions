const { Console } = require('console');
const data = require('../data/zoo_data');

function separeAnimalsByLocation() {
  locationObj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((element) => {
    const { name, location } = element;
    locationObj[location].push(name);
  });
  return locationObj;
}

function increaseAnimalNames(obj, species) {
  const newObj = obj;
  Object.keys(newObj).forEach((location) => {
    newObj[location] = newObj[location].map((animal) => {
      const newElement = {};
      const filterByAnimal = species.find((element) => element.name === animal);
      const arrayNames = filterByAnimal.residents.map((element) => element.name);
      newElement[animal] = arrayNames;
      return newElement;
    });
  });
  return newObj;
}

function filterSpeciesBySex(arr, sex) {
  return arr.map((element) => {
    const newElement = element;
    newElement.residents = element.residents.filter((resident) => resident.sex === sex);
    return newElement;
  });
}

function sortNames(obj) {
  sortObject = obj;
  Object.keys(obj).forEach((location) => {
    sortObject[location].forEach((element, index) => {
      const key = Object.keys(element)[0]
      sortObject[location][index][key].sort();
    }) 
  });
  return sortObject;
}

const getAnimalMap = (options) => {
  const animalsByLocation = separeAnimalsByLocation();
  if (options) {
    const { includeNames, sex, sorted } = options;
    const speciesArray = sex ? filterSpeciesBySex(data.species, sex) : data.species;
    let returnObject;
    if (includeNames) {
      returnObject = increaseAnimalNames(animalsByLocation, speciesArray);
      returnObject = sorted ? sortNames(returnObject) : returnObject;
    } else {
      returnObject = animalsByLocation;
    }
    return returnObject;
  }
  return animalsByLocation;
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
