const data = require('../data/zoo_data');

const animalsByRegion = () => {
  const regions = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach(({ name, location }) => {
    regions[location].push(name);
  });
  return regions;
};

const verifyAnimalsByRegion = (options) => {
  let verify = false;
  if (!options) verify = true;

  return verify;
};
function getAnimalMap(options) {
  // seu código aqui
  const teste = verifyAnimalsByRegion(options);

  if (teste) return animalsByRegion();
}

module.exports = getAnimalMap;
