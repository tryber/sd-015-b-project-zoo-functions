const { species } = require('../data/zoo_data');

const regions = ['NE', 'NW', 'SE', 'SW'];

function filterByRegions(region) {
  return species.filter((specie) => specie.location === region);
}

function outputDeafult() {
  const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };

  regions.forEach((region) => Object.assign(objectOfRegions[region],
    filterByRegions(region).map((resident) => resident.name)));

  return objectOfRegions;
}

function includeName() {
  const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };

  regions.forEach((region) => {
    filterByRegions(region).forEach((specie) => {
      let tempObj = {};
      const { name, residents } = specie;
      tempObj = { [name]: [] };
      residents.forEach((resident) => {
        const residentName = resident.name;
        tempObj[name].push(residentName);
      });
      objectOfRegions[region].push(tempObj);
    });
  });

  return objectOfRegions;
}

function includeNameSorted() {
  const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };

  regions.forEach((region) => {
    filterByRegions(region).forEach((specie) => {
      let tempObj = {};
      const { name, residents } = specie;
      tempObj = { [name]: [] };
      residents.forEach((resident) => {
        const residentName = resident.name;
        tempObj[name].push(residentName);
      });
      tempObj[name].sort();
      objectOfRegions[region].push(tempObj);
    });
  });

  return objectOfRegions;
}

function getAnimalMap(options) {
  if (!options) return outputDeafult();

  const { includeNames, sorted = false } = options;

  if (sorted) return includeNameSorted();

  if (includeNames) return includeName();
}

module.exports = getAnimalMap;
