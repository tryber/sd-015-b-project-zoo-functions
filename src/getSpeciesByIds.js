const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return ids;
  const answer = [];
  ids.forEach((id) => {
    const selectedSpecie = data.species.find((specie) => specie.id === id);
    answer.push(selectedSpecie);
  });
  return answer;
}

module.exports = getSpeciesByIds;
