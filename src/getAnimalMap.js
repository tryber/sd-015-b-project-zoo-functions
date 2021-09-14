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

const getAnimalIncludeName = (sorted) => {
  const object = {};
  species.forEach(({ location, name, residents }) => {
    if (!object[location]) {
      object[location] = [];
    }
    let residentsMap = [...residents];
    residentsMap = residents.map((resident) => resident.name);
    if (sorted) residentsMap.sort();
    object[location].push({ [name]: residentsMap });
  });
  return object;
};

function getAnimalMap(options) {
  if (!options) return getAnimalLocation();

  const { includeNames, sorted } = options;
  if (includeNames) return getAnimalIncludeName(sorted);
}

module.exports = getAnimalMap;
