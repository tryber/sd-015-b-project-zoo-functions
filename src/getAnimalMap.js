const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  return data.species.reduce((acc, spc) => {
    const { location } = spc;
    const { name } = spc;
    acc[location] = name;
    return acc;
  }, {});
}

console.log(getAnimalMap());
module.exports = getAnimalMap;
