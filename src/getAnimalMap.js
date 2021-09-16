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
  const arrInclud = {};
  species.forEach((specie) => {
    if (!arrInclud[specie.location]) arrInclud[specie.location] = [];
    let residents = [...specie.residents];
    if (sex) residents = residents.filter((specieSex) => specieSex.sex === sex);
    residents = residents.map((resident) => resident.name);
    if (sorted) residents.sort();

    arrInclud[specie.location].push({ [specie.name]: residents });
  });
  return arrInclud;
}

function getAnimalMap(options) {
  if (!options) return searchAnimal();
  const { includeNames, sorted, sex } = options;
  if (includeNames) return returnAll(sorted, sex);
  return searchAnimal();
}

module.exports = getAnimalMap;
