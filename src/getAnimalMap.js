const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsByLocation() {
  const regions = {};

  species.forEach((specie) => {
    if (!regions[specie.location]) regions[specie.location] = [];
    regions[specie.location].push(specie.name);
  });

  return regions;
}

function animalsManagement(sorted, sex) {
  const emptyObject = {};

  species.forEach((specie) => {
    if (!emptyObject[specie.location]) emptyObject[specie.location] = [];
    let residents = [...specie.residents];
    if (sex) residents = residents.filter((specieGender) => specieGender.sex === sex);
    residents = residents.map((resident) => resident.name);
    if (sorted) residents.sort();
    emptyObject[specie.location].push({ [specie.name]: residents });
  });

  return emptyObject;
}

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) return animalsManagement(sorted, sex);
  return getAnimalsByLocation();
}

module.exports = getAnimalMap;
