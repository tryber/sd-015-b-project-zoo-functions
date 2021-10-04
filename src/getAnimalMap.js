const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const getAnimalsForLocation = () => {
  const animalsLocation = {
    NE: species
      .filter((specie) => specie.location === 'NE')
      .map((animal) => animal.name),
    NW: species
      .filter((specie) => specie.location === 'NW')
      .map((animal) => animal.name),
    SE: species
      .filter((specie) => specie.location === 'SE')
      .map((animal) => animal.name),
    SW: species
      .filter((specie) => specie.location === 'SW')
      .map((animal) => animal.name),
  };
  return animalsLocation;
};

function getAnimalsIncludeOptions(sorted, sex) {
  const emptyObject = {};
  species.forEach((specie) => {
    if (!emptyObject[specie.location]) emptyObject[specie.location] = [];
    let residents = [...specie.residents];
    if (sex) residents = residents.filter((specieSex) => specieSex.sex === sex);
    residents = residents.map((resident) => resident.name);
    if (sorted) residents.sort();
    emptyObject[specie.location].push({ [specie.name]: residents });
  });
  return emptyObject;
}

function getAnimalMap(options) {
  if (options === undefined) {
    return getAnimalsForLocation();
  }
  const { includeNames, sorted, sex } = options;
  if (includeNames) return getAnimalsIncludeOptions(sorted, sex);
  return getAnimalMap();
}

module.exports = getAnimalMap;
