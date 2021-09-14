const data = require('../data/zoo_data');

function filterSex(animals, sexObject) {
  const objects = sexObject === undefined
    ? animals
    : animals.filter((animal) => {
      const result = animal.sex === sexObject;
      return result;
    });
  return objects.map((animal) => animal.name);
}
function allAnimals(arrayAnimal, options) {
  return arrayAnimal.map((element) => {
    const animalSelect = data.species.find((specie) => specie.name === element).residents;
    const animalsResidents = filterSex(animalSelect, options.sex);
    if (options.sorted) {
      animalsResidents.sort();
    }
    const result = {};
    result[element] = animalsResidents;
    return result;
  });
}
function animalLocation(local, options) {
  let result;
  const animalsLocation = data.species
    .filter((animal) => {
      const retornoFilter = animal.location === local;
      return retornoFilter;
    })
    .map((animal) => animal.name);
  if (options !== undefined && options.includeNames === true) {
    result = allAnimals(animalsLocation, options);
  } else {
    result = animalsLocation;
  }
  return result;
}

function getAnimalMap(options) {
  const result = {};
  const locals = [...new Set(data.species.map((specie) => specie.location))];
  locals.forEach((local) => {
    result[local] = animalLocation(local, options);
  });
  return result;
}

module.exports = getAnimalMap;
