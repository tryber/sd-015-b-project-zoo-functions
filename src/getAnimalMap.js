const { species } = require('../data/zoo_data');

function searchDefault(sorted, sex) {
  const regions = {};

  species.forEach((specie) => {
    if (!regions[specie.location]) regions[specie.location] = [];
    if (sex) {
      const verifyGender = specie.residents.some((resident) => resident.sex === sex);
      if (!verifyGender) return;
    }
    regions[specie.location].push(specie.name);
    if (sorted) regions[specie.location].sort();
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
  return searchDefault(sorted, sex);
}

module.exports = getAnimalMap;
