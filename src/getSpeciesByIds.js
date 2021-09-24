const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === '') {
    return [];
  }
  const result = [];
  ids.forEach((element) => {
    data.species.map((item) => {
      if (item.id === element) {
        result.push(item);
      }
      return true;
    });
  });
  return result;
}

module.exports = getSpeciesByIds;
