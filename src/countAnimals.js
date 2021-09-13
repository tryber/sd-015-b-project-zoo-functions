const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (typeof animal === 'undefined') {
    const newObject = {};
    species.forEach((name) => {
      newObject[name.name] = name.residents.length;
    });
    return newObject;
  }
  const selected = species.find((ondeEstou) => ondeEstou.name === animal.specie);
  if (animal.gender) {
    return selected.residents.filter((ondeEstou) => ondeEstou.sex === animal.gender).length;
  }
  return selected.residents.length;
}
module.exports = countAnimals;
console.log(countAnimals({ specie: 'penguins' }));
