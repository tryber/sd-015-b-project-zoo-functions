const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (options === undefined) {
    species.map((animals) => animals.location);
  }
}

module.exports = getAnimalMap;
