const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByLocation = (location) => species
  .filter((element) => element.location === location)
  .map((element) => element.name);

const getElementsByLocation = (location) => species // usado no includedNames: true
  .filter((element) => element.location === location);

const getNamesBySpeciesAndLocation = (location) => getElementsByLocation(location)
  .reduce((acc, element) => {
    acc.push(element);
    return acc;
  }, []);

const noParameters = () => {
  const locationObject = {
    NE: getSpeciesByLocation('NE'),
    NW: getSpeciesByLocation('NW'),
    SE: getSpeciesByLocation('SE'),
    SW: getSpeciesByLocation('SW'),
  };
  return locationObject;
};

const includeNamesTrue = () => {
  const locationWithNames = {
    NE: getNamesBySpeciesAndLocation('NE'),
    NW: getNamesBySpeciesAndLocation('NW'),
    SE: getNamesBySpeciesAndLocation('SE'),
    SW: getNamesBySpeciesAndLocation('SW'),
  };
  return locationWithNames;
};

/* const getNamesBySexAndLocation = (location, sex) => {
  return getElementsByLocation(location).residents.filter((elementSex) => elementSex.sex === sex).reduce((accumulator, element) => {
    accumulator[element.name] = element.map(
      (elements) => elements.name,
    );
    return accumulator;
  }, {});
}; */

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return noParameters();
  }

  if (options.includeNames) {
    return includeNamesTrue();
  }

  /* if (options.includeNames && options.sex) {
    return getNamesBySexAndLocation();
  } */
}
console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
