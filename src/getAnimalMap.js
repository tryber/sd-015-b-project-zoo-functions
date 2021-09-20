const data = require('../data/zoo_data');

const { species } = data;

const filterNe = species.filter((specieData) => specieData.location === 'NE');
const filterNw = species.filter((specieData) => specieData.location === 'NW');
const filterSe = species.filter((specieData) => specieData.location === 'SE');
const filterSw = species.filter((specieData) => specieData.location === 'SW');

const defaultPar = () => ({
  NE: filterNe.map((specie) => specie.name),
  NW: filterNw.map((specie) => specie.name),
  SE: filterSe.map((specie) => specie.name),
  SW: filterSw.map((specie) => specie.name),
});

function createObjNames(specie) {
  return Object.defineProperty({}, specie.name, {
    value: specie.residents.map((element) => element.name),
    enumerable: true,
  });
}

function createSortedObjNames(specie) {
  return Object.defineProperty({}, specie.name, {
    value: specie.residents.map((element) => element.name).sort(),
    enumerable: true,
  });
}

function createObjFemaleNames(specie) {
  return Object.defineProperty({}, specie.name, {
    value: specie.residents.filter((el) => el.sex === 'female').map((el) => el.name),
    enumerable: true,
  });
}

function createObjMaleNames(specie) {
  return Object.defineProperty({}, specie.name, {
    value: specie.residents.filter((el) => el.sex === 'male').map((el) => el.name),
    enumerable: true,
  });
}

function createSortedFemaleNames(specie) {
  return Object.defineProperty({}, specie.name, {
    value: specie.residents.filter((el) => el.sex === 'female').map((el) => el.name).sort(),
    enumerable: true,
  });
}

function createSortedMaleNames(specie) {
  return Object.defineProperty({}, specie.name, {
    value: specie.residents.filter((el) => el.sex === 'male').map((el) => el.name).sort(),
    enumerable: true,
  });
}

function animalsNames(...defaultPar1) {
  const receivedDefault = defaultPar1[0];
  receivedDefault.NE = filterNe.map(createObjNames);
  receivedDefault.NW = filterNw.map(createObjNames);
  receivedDefault.SE = filterSe.map(createObjNames);
  receivedDefault.SW = filterSw.map(createObjNames);
  return receivedDefault;
}

function sortedAnimalsNames(...defaultPar2) {
  const receivedDefault = defaultPar2[0];
  receivedDefault.NE = filterNe.map(createSortedObjNames);
  receivedDefault.NW = filterNw.map(createSortedObjNames);
  receivedDefault.SE = filterSe.map(createSortedObjNames);
  receivedDefault.SW = filterSw.map(createSortedObjNames);
  return receivedDefault;
}

function femaleAnimalsNames(...defaultPar3) {
  const receivedDefault = defaultPar3[0];
  receivedDefault.NE = filterNe.map(createObjFemaleNames);
  receivedDefault.NW = filterNw.map(createObjFemaleNames);
  receivedDefault.SE = filterSe.map(createObjFemaleNames);
  receivedDefault.SW = filterSw.map(createObjFemaleNames);
  return receivedDefault;
}

function maleAnimalsNames(...defaultPar4) {
  const receivedDefault = defaultPar4[0];
  receivedDefault.NE = filterNe.map(createObjMaleNames);
  receivedDefault.NW = filterNw.map(createObjMaleNames);
  receivedDefault.SE = filterSe.map(createObjMaleNames);
  receivedDefault.SW = filterSw.map(createObjMaleNames);
  return receivedDefault;
}

function sortedFemaleNames(...defaultPar5) {
  const receivedDefault = defaultPar5[0];
  receivedDefault.NE = filterNe.map(createSortedFemaleNames);
  receivedDefault.NW = filterNw.map(createSortedFemaleNames);
  receivedDefault.SE = filterSe.map(createSortedFemaleNames);
  receivedDefault.SW = filterSw.map(createSortedFemaleNames);
  return receivedDefault;
}

function sortedMaleNames(...defaultPar6) {
  const receivedDefault = defaultPar6[0];
  receivedDefault.NE = filterNe.map(createSortedMaleNames);
  receivedDefault.NW = filterNw.map(createSortedMaleNames);
  receivedDefault.SE = filterSe.map(createSortedMaleNames);
  receivedDefault.SW = filterSw.map(createSortedMaleNames);
  return receivedDefault;
}
function ifSexTrue(options) {
  if (options.sex === 'female') {
    return femaleAnimalsNames(defaultPar());
  }
  if (options.sex === 'male') {
    return maleAnimalsNames(defaultPar());
  }
}

function ifSexSortedTrue(options) {
  if (options.sex === 'female') {
    return sortedFemaleNames(defaultPar());
  }
  if (options.sex === 'male') {
    return sortedMaleNames(defaultPar());
  }
}

function ifSorted(options) {
  if (options.sex) { return ifSexSortedTrue(options); }
  return sortedAnimalsNames(defaultPar());
}

function ifIncludes(options) {
  if (options.sorted) { return ifSorted(options); }
  if (options.sex) { return ifSexTrue(options); }
  return animalsNames(defaultPar());
}

function getAnimalMap(options = defaultPar()) {
  // seu código aqui
  if (!options.includeNames) { return defaultPar(); }
  if (options.includeNames) { return ifIncludes(options); }
}

module.exports = getAnimalMap;
