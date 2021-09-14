const data = require('../data/zoo_data');

function getAnimalMap(options = data.species) {
  const ne = options.filter((element) => element.location === 'NE');
  const nw = options.filter((element) => element.location === 'NW');
  const se = options.filter((element) => element.location === 'SE');
  const sw = options.filter((element) => element.location === 'SW');
  const allLocations = [ne, nw, se, sw];
  return allLocations.map((element, i) => ({ NE: options.name[i] }));
}
module.exports = getAnimalMap;
console.log(getAnimalMap());
