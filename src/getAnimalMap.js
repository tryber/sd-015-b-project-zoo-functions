const { species } = require('../data/zoo_data');

function filterByRegions(region) {
  return species.filter((specie) => specie.location === region);
}

function outputDeafult() {
  const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };
  const regions = Object.keys(objectOfRegions);

  regions.forEach((region) => Object.assign(objectOfRegions[region],
    filterByRegions(region).map((resident) => resident.name)));

  return objectOfRegions;
}

function includeName() {
  const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };
  const regions = Object.keys(objectOfRegions);

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

function getAnimalMap(options) {
  if (!options) return outputDeafult();

  const { includeNames = false } = options;

  if (includeNames) return includeName();
}

module.exports = getAnimalMap;
