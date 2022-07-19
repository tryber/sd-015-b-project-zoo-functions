const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((acc, item) => {
    const findIds = data.species.find((specie) => item === specie.id);
    acc.push(findIds);
    return acc;
  }, []);
}

module.exports = getSpeciesByIds;
