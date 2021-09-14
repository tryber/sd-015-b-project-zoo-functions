const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function searchAnimal() {
  const regions = {};
  species.forEach((specie) => {
    if (!regions[specie.location]) regions[specie.location] = [];
    regions[specie.location].push(specie.name);
  });
  return regions;
}

function returnAll(sorted, sex) {
  const arrReturnAllways = {};
  species.forEach((specie) => {
    if (arrReturnAllways[specie.location]) arrReturnAllways[specie.location] = [];
    let residents = [...specie.residents];
    if (sex) residents = residents.filter((specieSex) => specieSex.sex === sex);
    residents = residents.map((resident) => resident.name);
    if (sorted) residents.sort();

    arrReturnAllways[specie.location].push({ [specie.name]: residents });
  });
  return arrReturnAllways;
}

function getAnimalMap(options) {
  if (!options) return searchAnimal();
  const { includeNames, sorted, sex } = options;
  if (includeNames) return returnAll(sorted, sex);
  return searchAnimal();
}

module.exports = getAnimalMap;
