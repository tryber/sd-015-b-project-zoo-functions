const data = require('../data/zoo_data');

const { species } = data;

const filterNe = species.filter((specieData) => specieData.location === 'NE');
const filterNw = species.filter((specieData) => specieData.location === 'NW');
const filterSe = species.filter((specieData) => specieData.location === 'SE');
const filterSw = species.filter((specieData) => specieData.location === 'SW');

const defaultPar = {
  NE: filterNe.map((specie) => specie.name),
  NW: filterNw.map((specie) => specie.name),
  SE: filterSe.map((specie) => specie.name),
  SW: filterSw.map((specie) => specie.name),
};

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

function animalsNames() {
  defaultPar.NE = filterNe.map(createObjNames);
  defaultPar.NW = filterNw.map(createObjNames);
  defaultPar.SE = filterSe.map(createObjNames);
  defaultPar.SW = filterSw.map(createObjNames);
  return defaultPar;
}

function sortedAnimalsNames() {
  defaultPar.NE = filterNe.map(createSortedObjNames);
  defaultPar.NW = filterNw.map(createSortedObjNames);
  defaultPar.SE = filterSe.map(createSortedObjNames);
  defaultPar.SW = filterSw.map(createSortedObjNames);
  return defaultPar;
}

function femaleAnimalsNames() {
  defaultPar.NE = filterNe.map(createObjFemaleNames);
  defaultPar.NW = filterNw.map(createObjFemaleNames);
  defaultPar.SE = filterSe.map(createObjFemaleNames);
  defaultPar.SW = filterSw.map(createObjFemaleNames);
  return defaultPar;
}

function maleAnimalsNames() {
  defaultPar.NE = filterNe.map(createObjMaleNames);
  defaultPar.NW = filterNw.map(createObjMaleNames);
  defaultPar.SE = filterSe.map(createObjMaleNames);
  defaultPar.SW = filterSw.map(createObjMaleNames);
  return defaultPar;
}

function sortedFemaleNames() {
  defaultPar.NE = filterNe.map(createSortedFemaleNames);
  defaultPar.NW = filterNw.map(createSortedFemaleNames);
  defaultPar.SE = filterSe.map(createSortedFemaleNames);
  defaultPar.SW = filterSw.map(createSortedFemaleNames);
  return defaultPar;
}

function sortedMaleNames() {
  defaultPar.NE = filterNe.map(createSortedMaleNames);
  defaultPar.NW = filterNw.map(createSortedMaleNames);
  defaultPar.SE = filterSe.map(createSortedMaleNames);
  defaultPar.SW = filterSw.map(createSortedMaleNames);
  return defaultPar;
}
function ifSexTrue(options) {
  if (options.sex === 'female') {
    femaleAnimalsNames();
    return defaultPar;
  }
  if (options.sex === 'male') {
    maleAnimalsNames();
    return defaultPar;
  }
  return defaultPar;
}

function ifSexSortedTrue(options) {
  if (options.sex === 'female') {
    sortedFemaleNames();
    return defaultPar;
  }
  if (options.sex === 'male') {
    sortedMaleNames();
    return defaultPar;
  }
  return defaultPar;
}

function ifSorted(options) {
  if (options.sex) { return ifSexSortedTrue(options); }
  sortedAnimalsNames();
  return defaultPar;
}

function ifIncludes(options) {
  if (options.sorted) { return ifSorted(options); }
  if (options.sex) { return ifSexTrue(options); }
  animalsNames();
  return defaultPar;
}

function getAnimalMap(options = defaultPar) {
  // seu código aqui
  if (options.includeNames) { return ifIncludes(options); }

  return defaultPar;
}

module.exports = getAnimalMap;
