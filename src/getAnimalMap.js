const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalLocation = () => species
  .reduce((object, current) => Object
    .assign(object, { [current.location]: (species
      .filter(({ location }) => location === current.location))
      .map(({ name }) => name) }), {});

function getAnimalMap(options) {
  if (!options) {
    return getAnimalLocation();
  }
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
