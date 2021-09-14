const data = require('../data/zoo_data');

function animalsSortedByLocation() {
  return data.species.reduce((acc, spc) => {
    acc[spc.location] = data.species
      .filter((spc2) => spc2.location === spc.location)
      .map((spc3) => spc3.name);
    return acc;
  }, {});
}
function accRHSFunc(spc) {
  const nameRHS = data.species
    .filter((spc2) => spc2.location === spc.location)
    .map((obj) => obj.residents
      .map((residents) => residents.name));
  return nameRHS;
}

function animalsSortedIncludeName() {
  return data.species.reduce((acc, spc) => {
    const accRHS = accRHSFunc(spc);
    acc[spc.location] = accRHS;
    return acc;
  }, {});
}
function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    const animalMap = animalsSortedByLocation();
    return animalMap;
  }

  if (options.sorted === true) {
    const animalMap = animalsSortedIncludeName();
    return animalMap;
  }
}

console.log(getAnimalMap({ sorted: true }));
module.exports = getAnimalMap;
