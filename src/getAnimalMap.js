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

const getAnimalIncludeName = () => {
  const object = {};
  species.forEach(({ location, name, residents }) => {
    if (!object[location]) {
      object[location] = [];
    }
    let resid = [...residents];
    resid = residents.map((resident) => resident.name);
    object[location].push({ [name]: resid });
  });
  return object;
};

function getAnimalMap(options) {
  if (!options) {
    return getAnimalLocation();
  }

  if (options.includeNames) {
    return getAnimalIncludeName();
  }
}

console.log(getAnimalMap());
console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
