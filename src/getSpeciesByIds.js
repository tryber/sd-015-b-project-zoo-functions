const data = require('../data/zoo_data');

function getSpeciesByIds(id, otherId) {
  // seu código aqui
  const speciesResult = [];

  if (!id) {
    return speciesResult;
  }

  speciesResult.push(data.species.find( specie => specie.id === id ));

  if (otherId) {
    speciesResult.push(data.species.find( specie => specie.id === otherId ));
  }

  return speciesResult;
}

module.exports = getSpeciesByIds;
