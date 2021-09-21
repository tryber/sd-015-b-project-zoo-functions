const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids, ids2) {
  function verificaId(obj) {
    if (obj.id === ids || obj.id === ids2) {
      return obj;
    }
  }
  return species.filter(verificaId);
}

module.exports = getSpeciesByIds;
