const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// um ou mais ids (parametros, então coloquei os ..., chamado de rest argument) //
const getSpeciesByIds = (...ids) => species.filter((kind) => ids.includes(kind.id));

module.exports = getSpeciesByIds;
