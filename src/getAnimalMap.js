const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getDefaultLocation(spLocation) {
  return species.filter(({ location }) => location === spLocation).map(({ name }) => name);
}

const defaultLocations = {
  NE: getDefaultLocation('NE'),
  NW: getDefaultLocation('NW'),
  SE: getDefaultLocation('SE'),
  SW: getDefaultLocation('SW'),
};

// console.log(defaultLocations)

function getResidentsNames(location) {
  return species.filter((sp) => sp.location === location).reduce((acc, { name, residents }) => {
    const allResidents = residents.map((res) => res.name);
    const eachAnimal = { [name]: allResidents };
    acc.push(eachAnimal);
    return acc;
  }, []);
}

const animalsAndResidents = {
  NE: getResidentsNames('NE'),
  NW: getResidentsNames('NW'),
  SE: getResidentsNames('SE'),
  SW: getResidentsNames('SW'),
};
// console.log(animalsAndResidents);

function getResidentsNamesSorted(location) {
  return species.filter((sp) => sp.location === location).reduce((acc, { name, residents }) => {
    const allResidents = residents.map((res) => res.name);
    const eachAnimal = { [name]: allResidents.sort() };
    acc.push(eachAnimal);
    return acc;
  }, []);
}

const animalsAndResidentsSorted = {
  NE: getResidentsNamesSorted('NE'),
  NW: getResidentsNamesSorted('NW'),
  SE: getResidentsNamesSorted('SE'),
  SW: getResidentsNamesSorted('SW'),
};

function getResidentsNamesBySex(location, sex) {
  return species.filter((sp) => sp.location === location).reduce((acc, { name, residents }) => {
    const allResidents = residents.filter((resSex) => resSex.sex === sex).map((res) => res.name);
    const eachAnimal = { [name]: allResidents };
    acc.push(eachAnimal);
    return acc;
  }, []);
}
function createResidentsNamesBySex(sex) {
  return {
    NE: getResidentsNamesBySex('NE', sex),
    NW: getResidentsNamesBySex('NW', sex),
    SE: getResidentsNamesBySex('SE', sex),
    SW: getResidentsNamesBySex('SW', sex),
  };
}

function getSortedResidentsNamesBySex(location, sex) {
  return species.filter((sp) => sp.location === location).reduce((acc, { name, residents }) => {
    const allResidents = residents.filter((resSex) => resSex.sex === sex).map((res) => res.name);
    const eachAnimal = { [name]: allResidents.sort() };
    acc.push(eachAnimal);
    return acc;
  }, []);
}
function createSortedResidentsNamesBySex(sex) {
  return {
    NE: getSortedResidentsNamesBySex('NE', sex),
    NW: getSortedResidentsNamesBySex('NW', sex),
    SE: getSortedResidentsNamesBySex('SE', sex),
    SW: getSortedResidentsNamesBySex('SW', sex),
  };
}

function teste(options) {
  if (options.sex && options.sorted) {
    return createSortedResidentsNamesBySex(options.sex);
  }
  if (options.sorted) return animalsAndResidentsSorted;
  if (options.sex) {
    return createResidentsNamesBySex(options.sex);
  }
  return animalsAndResidents;
}

function getAnimalMap(options) {
  if (options && options.includeNames) return teste(options);
  return defaultLocations;
}
const options = { includeNames: true, sex: 'female' };
getAnimalMap(options);
// console.log(getAnimalMap(options));

module.exports = getAnimalMap;
