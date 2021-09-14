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
    .map((obj) => ({
      [obj.name]: obj.residents.map((resident) => resident.name),
    }));
  return nameRHS;
}

function accRHSFuncSorted(spc) {
  const nameRHS = data.species
    .filter((spc2) => spc2.location === spc.location)
    .map((obj) => ({
      [obj.name]: obj.residents.map((resident) => resident.name).sort(),
    }));
  return nameRHS;
}

function animalsIncludeName() {
  return data.species.reduce((acc, spc) => {
    const accRHS = accRHSFunc(spc);
    acc[spc.location] = accRHS;
    return acc;
  }, {});
}

function animalsIncludeNameSorted() {
  return data.species.reduce((acc, spc) => {
    const accRHS = accRHSFuncSorted(spc);
    acc[spc.location] = accRHS;
    return acc;
  }, {});
}

function accRHSFuncSex(spc, sex) {
  const nameRHS = data.species
    .filter((spc2) => spc2.location === spc.location)
    .map((obj) => ({
      [obj.name]: obj.residents
        .filter((resident) => resident.sex === sex)
        .map((anmName) => anmName.name),
    }));
  return nameRHS;
}

function animalsSex(sex) {
  return data.species.reduce((acc, spc) => {
    const accRHS = accRHSFuncSex(spc, sex);
    acc[spc.location] = accRHS;
    return acc;
  }, {});
}

function accRHSFuncSexSorted(spc, sex) {
  const nameRHS = data.species
    .filter((spc2) => spc2.location === spc.location)
    .map((obj) => ({
      [obj.name]: obj.residents
        .filter((resident) => resident.sex === sex)
        .map((anmName) => anmName.name).sort(),
    }));
  return nameRHS;
}
function animalsSexSorted(sex) {
  return data.species.reduce((acc, spc) => {
    const accRHS = accRHSFuncSexSorted(spc, sex);
    acc[spc.location] = accRHS;
    return acc;
  }, {});
}

function includeName(options) {
  if (options.sorted === true) {
    const animalMap = animalsIncludeNameSorted();
    return animalMap;
  }
  if (options.sex) {
    if (options.sort === true) {
      const animalMap = animalsSexSorted(options.sex);
      return animalMap;
    }
    const animalMap = animalsSex(options.sex);
    return animalMap;
  }
  const animalMap = animalsIncludeName();
  return animalMap;
}
function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    const animalMap = animalsSortedByLocation();
    return animalMap;
  }

  if (options.includeNames === true) {
    return includeName(options);
  }
}
const a = getAnimalMap({ includeNames: true, sex: 'female', sort: true });
console.log(a.NE);
module.exports = getAnimalMap;
