const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalByLocation() {
  const location = {};
  species.forEach((specie) => {
    if (!location[specie.location]) location[specie.location] = [];
    location[specie.location].push(specie.name);
  });
  return location;
}

function getAnimalNameByLocation(sex, sorted) {
  const location = {};
  species.forEach((specie) => {
    if (!location[specie.location]) location[specie.location] = [];
    let residents = [...specie.residents];
    if (sex) residents = residents.filter((animalSex) => animalSex.sex === sex);
    residents = residents.map((resident) => resident.name);
    if (sorted) residents.sort();
    location[specie.location].push({[specie.name]: residents});
  });
  return location;
}

function getAnimalMap(options) {
  if (!options) return getAnimalByLocation();
  const { sex, sorted, includeNames } = options;
  if (includeNames) return getAnimalNameByLocation(sex, sorted);
  return getAnimalByLocation();
}

module.exports = getAnimalMap;
