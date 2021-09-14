const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalsLocation = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};
function getMap() {
  const animals1 = { ...animalsLocation };
  species.forEach(({ name, location }) => {
    animals1[location].push(name);
  });
  console.log(animals1);
  return animals1;
}

function getNamesMap() {
  const animals2 = { ...animalsLocation };
  species.forEach(({ name, location, residents }) => {
    const obj = {};
    const animalNames = residents.map((resident) => resident.name);
    obj[name] = animalNames;
    animals2[location].push(obj);
  });
  console.log(animals2);
  return animals2;
}

function getAnimalMap(options) {
  if (!options) return getMap();
  if (options.includeNames) return getNamesMap();
}

getAnimalMap({ includeNames: true });
getAnimalMap();

module.exports = getAnimalMap;
