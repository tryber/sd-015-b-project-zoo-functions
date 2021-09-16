const data = require('../data/zoo_data');

const cardinalPoints = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

const points = Object.keys(cardinalPoints);

const getNameOfSpecies = (point) =>
  data.species.filter((specie) => specie.location === point).map((specie) => specie.name);

const getAllSpecies = (point) =>
  data.species.filter((specie) => specie.location === point);

const getNameResidents = (specie) =>
  specie.residents.map((resident) => resident.name);

function getNameResidetsIsSorted(specie, sorted) {
  const result = {};
  if (sorted) {
    result[specie.name] = getNameResidents(specie).sort();
  } else {
    result[specie.name] = getNameResidents(specie);
  }
  return result;
}

const getNameOfResidents = (allSpecies, sorted) =>
  allSpecies.map((specie) => getNameResidetsIsSorted(specie, sorted));

const getNameResidentsWithSex = (specie, sex) =>
  specie.residents.filter((resident) => resident.sex === sex).map((res) => res.name);

function getNameResidetsWithSexIsSorted(specie, sorted, sex) {
  const result = {};
  if (sorted) {
    result[specie.name] = getNameResidentsWithSex(specie, sex).sort();
  } else {
    result[specie.name] = getNameResidentsWithSex(specie, sex);
  }
  return result;
}

const getNameOfResidentsWithSex = (allSpecies, sorted, sex) =>
  allSpecies.map((specie) => getNameResidetsWithSexIsSorted(specie, sorted, sex));

function getResidents(point, sorted, sex) {
  let result;
  if (!sex) {
    result = getNameOfResidents(getAllSpecies(point), sorted);
  } else {
    result = getNameOfResidentsWithSex(getAllSpecies(point), sorted, sex);
  }
  return result;
}

function getAnimalDefaultMap() {
  for (let index = 0; index < points.length; index += 1) {
    cardinalPoints[points[index]] = getNameOfSpecies(points[index]);
  }
  return cardinalPoints;
}

function getAnimalsPersonalized(sex, sorted) {
  let result = [];
  if (sex === 'female' || (sex === 'female' && sorted === true)) {
    result = getAnimalDefaultMap();
  }
  return result;
}

function getAnimalParametersMap(options) {
  let result = [];
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    for (let index = 0; index < points.length; index += 1) {
      cardinalPoints[points[index]] = getResidents(points[index], sorted, sex);
    }
    result = cardinalPoints;
  } else {
    result = getAnimalsPersonalized(sex, sorted);
  }
  return result;
}

function getAnimalMap(options) {
  let result;
  if (options === undefined) {
    result = getAnimalDefaultMap();
  } else {
    result = getAnimalParametersMap(options);
  }
  return result;
}

module.exports = getAnimalMap;
