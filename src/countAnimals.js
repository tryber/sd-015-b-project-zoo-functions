const data = require('../data/zoo_data');

function countAnimals({ specie, sex } = {}) {
  if (specie === undefined) {
    return Object.fromEntries(data.species.map(({ name, residents }) => [name, residents.length]));
  }
  const { residents } = data.species.find((e) => e.name === specie);
  if (sex === undefined) {
    return residents.length;
  }
  return residents.filter((e) => e.sex === sex).length;
}

module.exports = countAnimals;
