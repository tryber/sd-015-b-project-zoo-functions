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
  return animalsLocation;
}

function getNamesMap(option) {
  const animalsLocation = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach(({ name, location, residents }) => {
    const obj = {};
    const animalNames = residents.map((resident) => resident.name);
    if (option) animalNames.sort();
    console.log(animalNames);
    obj[name] = animalNames;
    animalsLocation[location].push(obj);
  });
  console.log(animalsLocation);
  return animalsLocation;
}

function getAnimalMap(options) {
  if (!options) return getMap();
  if (options.includeNames) return getNamesMap();
  if (options.sorted) return getNamesMap(options.sorted);
}

getAnimalMap({ includeNames: true });
getAnimalMap({ sorted: true });

module.exports = getAnimalMap;
