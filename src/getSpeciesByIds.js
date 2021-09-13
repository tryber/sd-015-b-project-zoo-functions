const data = require('../data/zoo_data');

function parametersUndefined() {
  return [];
}

function secondParameterUndefined(id1) {
  return data.species.filter((diversity) => diversity.id === id1);
  // return kind.map((speciesName) => speciesName.name);
}

function parametersDefined(id1, id2) {
  return data.species.filter((diversity) => diversity.id === id1 || diversity.id === id2);
  // return kind.map((speciesName) => speciesName.name);
}

function getSpeciesByIds(id1, id2) {
  if (id1 === undefined && id2 === undefined) {
    parametersUndefined();
  }
  if (id1 !== undefined && id2 === undefined) {
    secondParameterUndefined(id1);
  }
  return parametersDefined(id1, id2);
}

module.exports = getSpeciesByIds;
