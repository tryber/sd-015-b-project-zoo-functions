const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((animal) => ids.some((id) => animal.id === id));
//  ids.some cada elemento recebido do ids sera passado como parametro (id)
//  assim ele vai comparar se algum id é igual ao id recebido do animal que é
//  nesse casa cada parametro recebido do especies.
}

module.exports = getSpeciesByIds;
