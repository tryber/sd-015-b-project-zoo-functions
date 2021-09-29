const data = require('../data/zoo_data');

const animalRegion = () => {
  const animalMap = {};
  data.species.forEach(({ location, name }) => {
    if (!animalMap[location]) {
      animalMap[location] = [];
      animalMap[location].push(name);
    } else {
      animalMap[location].push(name);
    }
  });
  return animalMap;
};

const mapIncludesNames = (sort, sex) => {
  const animalMap = {};
  data.species.forEach((specie) => {
    if (!animalMap[specie.location]) {
      animalMap[specie.location] = [];
    }
    let residentsMap = [...specie.residents];
    if (sex) {
      residentsMap = residentsMap.filter((resident) => resident.sex === sex);
    }
    residentsMap = residentsMap.map((resident) => resident.name);
    if (sort) {
      residentsMap.sort();
    }
    animalMap[specie.location].push({ [specie.name]: residentsMap });
  });
  return animalMap;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    return mapIncludesNames(sorted, sex);
  }
  return animalRegion();
}

module.exports = getAnimalMap;
