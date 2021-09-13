const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arrayRetorno = [];
  ids.forEach((id) => arrayRetorno.push(data.species.find((object) => object.id === id)));
  return arrayRetorno;
}

module.exports = getSpeciesByIds;
