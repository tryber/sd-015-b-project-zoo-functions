const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const includeNames = () => {
  const objLoc = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(objLoc).forEach((element) => {
    objLoc[element] = species.filter((specie) => specie.location === element)
      .map(({ name, residents }) => {
        const obj = {};
        obj[name] = residents.name;
        return obj;
      });
  });
  return objLoc;
};

const byLocation = () => {
  const objLoc = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(objLoc).forEach((element) => {
    objLoc[element] = species.filter((specie) => specie.location === element)
      .map(({ name }) => name);
  });
  return objLoc;
};

function getAnimalMap(options) {
  if (options.includeNames) { return includeNames(); }
  return byLocation();
}

module.exports = getAnimalMap;
