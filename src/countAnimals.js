const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, atual) => {
      acc[atual.name] = atual.residents.length;
      return acc;
    }, {});
  }
  // ref.: consulta: https://github.com/tryber/sd-015-b-project-zoo-functions/pull/38/commits/886703fbc78a48ddc3193910625beef2415b9b80
  const { residents } = species.find((animals) => animals.name === animal.specie);
  const genderQuantity = residents.filter((resident) => resident.sex === animal.gender).length;

  return (animal.gender) ? genderQuantity : residents.length;
}

module.exports = countAnimals;
