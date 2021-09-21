const data = require('../data/zoo_data');

function getAnimalsNames(parameter, residents) {
  return residents.reduce((array, animal) => {
    if (parameter.sex === animal.sex || !parameter.sex) array.push(animal.name);
    return array;
  }, []);
}

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  // utilizei 'options =' CASO não tenha parâmetro, incluindo um objeto com todas as localizações;
  const object = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach(({ name, location, residents }) => {
    if (options.includeNames) {
      const animalList = getAnimalsNames(options, residents);
      if (options.sorted) animalList.sort();
      object[location].push({ [name]: animalList });
    } else {
      object[location].push(name);
    }
  });
  return object;
}

module.exports = getAnimalMap;
