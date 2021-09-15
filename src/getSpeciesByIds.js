const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arrayOfIds = [];
  ids.forEach((element) => {
    arrayOfIds.push(species.find((obj) => obj.id === element));
  });

  return arrayOfIds;
}

module.exports = getSpeciesByIds;
