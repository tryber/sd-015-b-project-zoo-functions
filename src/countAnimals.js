const data = require('../data/zoo_data');

// console.log(animal.sex);
// const specie = data.species.reduce((acc, actual) => {
//   acc[actual.name] = actual.residents.length;
//   return acc;
// }, {});
// return !animal ? specie : specie[animal.specie];
function countAnimals(animal) {
  const specie = data.species.reduce((acc, actual) => {
    acc[actual.name] = actual.residents.length;
    return acc;
  }, {});
  if (!animal) {
    return specie;
  } if (!animal.sex) {
    return specie[animal.specie];
  }
  const specieAndSex = data.species.find((userSpecie) => userSpecie.name === animal.specie);
  let specieAndSexCounter = 0;
  specieAndSex.residents.forEach((element) => {
    if (element.sex === animal.sex) {
      specieAndSexCounter += 1;
    }
  });
  return specieAndSexCounter;
}

module.exports = countAnimals;
