const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  const filterId = ids.map((id) => {
    const isIdAnimal = data.species.filter((anotherId) => (anotherId.id === id));
    return isIdAnimal[0];
  });
  return filterId;
}

module.exports = getSpeciesByIds;
