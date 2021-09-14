const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  } const idsFound = [];
  ids.forEach((idUnico) => species.forEach((atual) => {
    if (atual.id === idUnico) {
      idsFound.push(atual);
    }
  }, []));
  return idsFound;
}
module.exports = getSpeciesByIds;
