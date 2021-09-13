const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.map((element) => {
    const conf = ids.some((id) => element.id === id);
    return conf ? element : false; 
  }).filter((element) => element !== false);
}

module.exports = getSpeciesByIds;
