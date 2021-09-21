const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const searchResult = [];
  if (ids.length === 0) {
    return [];
  }
  for (let index = 0; index < ids.length; index += 1) {
    const verifyId = (element) => element.id === ids[index];
    searchResult.push(species.find(verifyId));
  }
  return searchResult;
}

getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274');

module.exports = getSpeciesByIds;
