const data = require('../data/zoo_data');

const { species } = data;

const getAllAnimalsMap = () =>
  species.reduce(
    (acc, { location, name }) =>
      ([location] in acc
        ? { ...acc, [location]: [...acc[location], name] }
        : { ...acc, [location]: [name] }),
    {},
  );

const getResidentnamesBySpecie = (name, sorted, sex) => {
  const { residents } = species.find((specie) => specie.name === name);

  const residentNames = typeof sex === 'undefined'
    ? residents.map((resident) => resident.name)
    : residents.filter((resident) => resident.sex === sex).map((resident) => resident.name);

  if (sorted) residentNames.sort();
  return residentNames;
};

const getAllAnimalsNamesMap = (allAnimals, sorted, sex) =>
  Object.keys(allAnimals).reduce(
    (acc, location) => ({
      ...acc,
      [location]: allAnimals[location].map((specieName) => ({
        [specieName]: getResidentnamesBySpecie(specieName, sorted, sex),
      })),
    }),
    {},
  );

const getAnimalMap = ({ includeNames = false, sorted = false, sex } = {}) => {
  const allAnimalsMap = getAllAnimalsMap();
  if (includeNames === false) return allAnimalsMap;

  return getAllAnimalsNamesMap(allAnimalsMap, sorted, sex);
};

module.exports = getAnimalMap;
