const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data'); // não usei?

function getSpeciesByIds(...ids) {
  const arrayObj = ids.map((id) => species.find((elem) => elem.id === id));
  return arrayObj;
}

module.exports = getSpeciesByIds;
