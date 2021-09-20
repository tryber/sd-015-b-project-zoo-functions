const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findSpecieById = (id) => species.find((specie) => specie.id === id);

function getSpeciesByIds(...ids) {
  if (!ids) return [];

  const arraySpecies = ids.map((id) => findSpecieById(id));

  return arraySpecies;
}

module.exports = getSpeciesByIds;
