const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const includeNames = () => {
//   const objLoc = { NE: [], NW: [], SE: [], SW: [] };
//   objLoc.NE = species.filter((specie) => specie.location === 'NE').map(({ name, residents }) => {
//     const obj = {};
//     obj[name] = residents;
//     return obj;
//   });
// };

function getAnimalMap(options) {
  const objLoc = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(objLoc).forEach((element) => {
    objLoc[element] = species.filter((specie) => specie.location === element);
  });
  return objLoc;
}

module.exports = getAnimalMap;
