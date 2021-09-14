const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalLocation = () => {
  const object = {};
  species.forEach(({ location, name }) => {
    if (!object[location]) {
      object[location] = [];
    }
    object[location].push(name);
  });
  return object;
};

const animalManagement = (sorted, sex) => {
  const object = {};
  species.forEach(({ location, name, residents }) => {
    if (!object[location]) {
      object[location] = [];
    }
    let residentsMap = [...residents];
    if (sex) {
      residentsMap = residentsMap.filter((gender) => gender.sex === sex);
    }
    residentsMap = residentsMap.map((resident) => resident.name);
    if (sorted) residentsMap.sort();
    object[location].push({ [name]: residentsMap });
  });
  return object;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) return animalManagement(sorted, sex);
  return getAnimalLocation();
}

module.exports = getAnimalMap;
