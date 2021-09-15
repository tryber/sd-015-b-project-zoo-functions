const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Fonte https://github.com/tryber/sd-015-b-project-zoo-functions/blob/annie-haurani-zoo-functions/src/getAnimalMap.js
function getAnimalsNames(option, residents) {
  return residents.reduce((arr, animal) => {
    if (option.sex && option.sex === animal.sex) arr.push(animal.name);
    if (!option.sex) arr.push(animal.name);
    return arr;
  }, []);
}

// function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
//   const result = species.reduce((animalMap, specie) => {
//     if (options.includeNames) {
//       const animalList = getAnimalsNames(options, specie);
//       if (options.sorted) animalList.sort();
//       animalMap[specie.location].push({ [specie.name]: animalList });
//     } else {
//       animalMap[specie.location].push(specie.name);
//     }
//     return animalMap;
//   }, { NE: [], NW: [], SE: [], SW: [] });
//   return result;
// }

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach(({ name, location, residents }) => {
    if (options.includeNames) {
      const animalList = getAnimalsNames(options, residents);
      if (options.sorted) animalList.sort();
      obj[location].push({ [name]: animalList });
    } else {
      obj[location].push(name);
    }
  });
  return obj;
}

module.exports = getAnimalMap;
