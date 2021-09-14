const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getMap() {
  const animalsLocation = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach(({ name, location }) => {
    animalsLocation[location].push(name);
  });
  console.log(animalsLocation);
  return animalsLocation;
}

function getNamesMap() {
  const animalsLocation = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach(({ name, location, residents }) => {
    const obj = {};
    const animalNames = residents.map((resident) => resident.name);
    obj[name] = animalNames;
    animalsLocation[location].push(obj);
  });
  console.log(animalsLocation);
  return animalsLocation;
}

function getAnimalMap(options) {
  if (!options) return getMap();
  if (options.includeNames) return getNamesMap();
}

// getAnimalMap({ includeNames: true });
// getAnimalMap();

module.exports = getAnimalMap;
