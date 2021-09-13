const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(... ids) {
 return ids.map((id) => species.find((species) => species.id === id))
}
 console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274','78460a91-f4da-4dea-a469-86fd2b8ccc84'))
 module.exports = getSpeciesByIds;
