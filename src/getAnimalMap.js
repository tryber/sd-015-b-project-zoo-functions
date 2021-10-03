const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsNames(option, residents) {
  return residents.reduce((array, animal) => {
    if (option.sex && option.sex === animal.sex) array.push(animal.name);
    if (!option.sex) array.push(animal.name);
    return array;
  }, []);
}

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  const region = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach(({ name, location, residents }) => {
    if (options.includeNames) {
      const animalList = getAnimalsNames(options, residents);
      if (options.sorted) animalList.sort();
      region[location].push({ [name]: animalList });
    } else {
      region[location].push(name);
    }
  });
  return region;
}

module.exports = getAnimalMap;
