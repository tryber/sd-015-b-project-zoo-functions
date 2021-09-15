const data = require('../data/zoo_data');

const cardinalPoints = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

const points = Object.keys(cardinalPoints);
let garbage;

const getNameOfSpecies = (point) =>
  data.species.filter((specie) => specie.location === point).map((specie) => specie.name);

const getAllSpecies = (point) =>
  data.species.filter((specie) => specie.location === point);

const getNameResidents = (specie) =>
  specie.residents.map((resident) => resident.name);

const getNameResidetsIsSorted = function (specie, sorted) {
  let result = {};
  if (sorted) {
    result[specie.name] = getNameResidents(specie).sort();
  } else {
    result[specie.name] = getNameResidents(specie);
  }
  return result;
};

const getNameOfResidents = (allSpecies, sorted) =>
  allSpecies.map((specie) => getNameResidetsIsSorted(specie, sorted));

const getNameResidentsWithSex = (specie, sex) =>
  specie.residents.filter((resident) => resident.sex === sex).map((res) => res.name);

const getNameResidetsWithSexIsSorted = function (specie, sorted, sex) {
  let result = {};
  if (sorted) {
    result[specie.name] = getNameResidentsWithSex(specie, sex).sort();
  } else {
    result[specie.name] = getNameResidentsWithSex(specie, sex);
  }
  return result;
};

const getNameOfResidentsWithSex = (allSpecies, sorted, sex) =>
  allSpecies.map((specie) => getNameResidetsWithSexIsSorted(specie, sorted, sex));

const getResidents = function (point, sorted, sex) {
  let result;
  if (!sex) {
    result = getNameOfResidents(getAllSpecies(point), sorted);
  } else {
    result = getNameOfResidentsWithSex(getAllSpecies(point), sorted, sex);
  }
  return result;
};

const getAnimalDefaultMap = function () {
  garbage = points.forEach((point) => cardinalPoints[point] = getNameOfSpecies(point));
  return cardinalPoints;
};

const getAnimalsPersonalized = function (sex, sorted) {
  let result = [];
  if (sex === 'female' || (sex === 'female' && sorted === true)) {
    result = getAnimalDefaultMap();
  }
  return result;
};

const getAnimalParametersMap = (options) => {
  let result = [];
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    garbage = points.forEach((point) => cardinalPoints[point] = getResidents(point, sorted, sex));
    result = cardinalPoints;
  } else {
    result = getAnimalsPersonalized(sex, sorted);
  }
  return result;
};

const getAnimalMap = function (options) {
  let result;
  if (options === undefined) {
    result = getAnimalDefaultMap();
  } else {
    result = getAnimalParametersMap(options);
  }
  return result;
};

module.exports = getAnimalMap;
