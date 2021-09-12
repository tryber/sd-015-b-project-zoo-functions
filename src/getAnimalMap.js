const { species } = require('../data/zoo_data');

const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };
const regions = Object.keys(objectOfRegions);

function filterByRegions(region) {
  return species.filter((specie) => specie.location === region);
}

function outputDeafult() {
  regions.forEach((region) => Object.assign(objectOfRegions[region],
    filterByRegions(region).map((resident) => resident.name)));

  return objectOfRegions;
}

function getAnimalMap(options) {
  if (!options) return outputDeafult();
}

module.exports = getAnimalMap;
