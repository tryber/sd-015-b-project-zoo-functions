const data = require('../data/zoo_data');

function createAnimalList(options, specie) {
  return specie.residents.reduce((arr, animal) => {
    if (options.sex && animal.sex === options.sex) arr.push(animal.name);
    if (!options.sex) arr.push(animal.name);
    return arr;
  }, []);
}

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  const result = data.species.reduce((obj, specie) => {
    if (options.includeNames) {
      const animalList = createAnimalList(options, specie);
      if (options.sorted) animalList.sort();
      obj[specie.location].push({ [specie.name]: animalList });
    } else {
      obj[specie.location].push(specie.name);
    }
    return obj;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return result;
}

module.exports = getAnimalMap;
