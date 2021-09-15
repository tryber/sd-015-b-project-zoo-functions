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

const getNameResidetsIsSorted = (specie, sorted) =>
  sorted === true
    ? { [specie.name]: getNameResidents(specie).sort() }
      : { [specie.name]: getNameResidents(specie) };

const getNameOfResidents = (allSpecies, sorted) =>
  allSpecies.map((specie) => getNameResidetsIsSorted(specie, sorted));

const getNameResidentsWithSex = (specie, sex) =>
  specie.residents.filter((resident) => resident.sex === sex).map((res) => res.name );

const getNameResidetsWithSexIsSorted = (specie, sorted, sex) =>
  sorted === true
    ? { [specie.name]: getNameResidentsWithSex(specie, sex).sort() }
      : { [specie.name]: getNameResidentsWithSex(specie, sex) };

const getNameOfResidentsWithSex = (allSpecies, sorted, sex) =>
  allSpecies.map((specie) => getNameResidetsWithSexIsSorted(specie, sorted, sex));

const getResidents = (point, sorted, sex) =>
  !sex
    ? getNameOfResidents(getAllSpecies(point), sorted)
      : getNameOfResidentsWithSex(getAllSpecies(point), sorted, sex);

const getAnimalsPersonalized = (sex, sorted) =>
  sex === 'female' || (sex === 'female' && sorted === true)
    ? getAnimalDefaultMap()
      : [];

const getAnimalParametersMap = (options) => {
  let result = [];
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    points.forEach((point) => cardinalPoints[point] = getResidents(point, sorted, sex));
    result = cardinalPoints;
  } else {
    result = getAnimalsPersonalized(sex, sorted);
  }
  return result;
};

const getAnimalDefaultMap = () => {
  points.forEach((point) => cardinalPoints[point] = getNameOfSpecies(point));
  return cardinalPoints;
};

const getAnimalMap = (options) =>
  options === undefined ? getAnimalDefaultMap() : getAnimalParametersMap(options);

module.exports = getAnimalMap;
