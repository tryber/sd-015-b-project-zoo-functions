const { species } = require('../data/zoo_data');

function searchDefault() {
  const regions = {};

  species.forEach((specie) => {
    if (!regions[specie.location]) regions[specie.location] = [];
    regions[specie.location].push(specie.name);
  });

  return regions;
}

function animalNames(sorted, sex) {
  const regions = {};

  species.forEach((specie) => {
    if (!regions[specie.location]) regions[specie.location] = [];
    let residents = [...specie.residents];
    if (sex) residents = residents.filter((resident) => resident.sex === sex);
    residents = residents.map((resident) => resident.name);
    if (sorted) residents.sort();
    regions[specie.location].push({ [specie.name]: residents });
  });

  return regions;
}

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;

  if (includeNames) return animalNames(sorted, sex);
  return searchDefault();
}

module.exports = getAnimalMap;
