const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getArrayAnimals() {
  const emptyObject = {};
  species.forEach((specie) => {
    if (!emptyObject[specie.location]) emptyObject[specie.location] = [];
    emptyObject[specie.location].push(specie.name);
  });
  return emptyObject;
}

function includeName(sorted, sex) {
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
  if (!options) return getArrayAnimals();
  const { includeNames, sorted, sex } = options;
  if (includeNames) return includeName(sorted, sex);
  return getAnimalMap();
}

module.exports = getAnimalMap;
