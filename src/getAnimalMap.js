const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options = {}) {
  const locationsObject = { NE: [], NW: [], SE: [], SW: [] };
  if (!options.includeNames) {
    species.forEach((animal) => locationsObject[animal.location].push(animal.name));
    return locationsObject;
  }
  data.species.forEach((animal) => {
    let { residents } = animal;
    if (options.sex) residents = residents.filter((sexo) => sexo.sex === options.sex);
    const getNames = residents.map((names) => names.name);
    if (options.sorted) getNames.sort();
    locationsObject[animal.location].push({ [animal.name]: getNames });
  });
  return locationsObject;
}

module.exports = getAnimalMap;
