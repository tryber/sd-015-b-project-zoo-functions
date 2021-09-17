const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const speciesPerRegion = () => {
  const animalMap = {};
  species.forEach((interado) => {
    if (!animalMap[interado.location]) {
      animalMap[interado.location] = [];
      animalMap[interado.location].push(interado.name);
    } else if (animalMap[interado.location]) {
      animalMap[interado.location].push(interado.name);
    }
  });
  return animalMap;
};

const mapIncludesNames = (sort, sex) => {
  const animalMap = {};
  species.forEach((interado) => {
    if (!animalMap[interado.location]) animalMap[interado.location] = [];
    let residents = [...interado.residents];
    if (sex) residents = residents.filter((resident) => resident.sex === sex);
    residents = residents.map((resident) => resident.name);
    if (sort === true) residents.sort();
    animalMap[interado.location].push({ [interado.name]: residents });
  });
  return animalMap;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;

  if (includeNames === true) return mapIncludesNames(sorted, sex);
  return speciesPerRegion();
}

module.exports = getAnimalMap;
