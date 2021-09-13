const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((id) => species.id === ids);
}

// console.log(getSpeciesByIds(species));

module.exports = getSpeciesByIds;
