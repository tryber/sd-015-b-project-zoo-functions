const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}
getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5', '78460a91-f4da-4dea-a469-86fd2b8ccc84');
module.exports = getSpeciesByIds;
