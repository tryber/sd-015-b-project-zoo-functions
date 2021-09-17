const data = require('../data/zoo_data');

const { species } = data;

const verify = (elemento) => species.find((el) => el.id === elemento);

function getSpeciesByIds(...ids) {
  const valores = ids.map((elemento) => verify(elemento));
  return valores;
}

module.exports = getSpeciesByIds;
