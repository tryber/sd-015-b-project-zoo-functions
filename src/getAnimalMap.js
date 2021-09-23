const data = require('../data/zoo_data');

// fonte https://github.com/tryber/sd-015-b-project-zoo-functions/blob/annie-haurani-zoo-functions/src/getAnimalMap.js

function createAnimalList(options, specie) {
  return specie.residents
    .filter((animal) => (options.sex && animal.sex === options.sex) || (!options.sex))
    .map((animal) => animal.name);
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
