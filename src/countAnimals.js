const data = require('../data/zoo_data');
// consultei o repo do Matheus Santos link: https://github.com/tryber/sd-015-b-project-zoo-functions/pull/93/commits/6b9b31160a343f6ffbce2c8562d21f8a89d13793

const { species } = data;

const countAnimals = ({ specie: specieName, sex } = {}) => {
  let count;

  if (typeof specieName === 'undefined') {
    const total = {};
    species.forEach((specie) => {
      total[specie.name] = specie.residents.length;
    });
    count = total;
  } else if (typeof sex === 'undefined') {
    count = species.find((specie) => specie.name === specieName).residents.length;
  } else {
    count = species
      .find((specie) => specie.name === specieName)
      .residents.filter((resident) => resident.sex === sex).length;
  }

  return count;
};
module.exports = countAnimals;
