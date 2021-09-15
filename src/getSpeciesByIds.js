const data = require('../data/zoo_data');

const { species } = data;
function getSpeciesByIds(id, id2) {
  const getId = species
    .filter((iden) => (iden.id === id || iden.id === id2 ? iden.id : iden === []));

  return getId;
}

module.exports = getSpeciesByIds;
