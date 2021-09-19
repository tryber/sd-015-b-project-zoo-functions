const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((element) => 
  species.find((animal)=> animal.id === element));

module.exports = getSpeciesByIds;
