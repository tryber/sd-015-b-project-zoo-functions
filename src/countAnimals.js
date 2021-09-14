const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // Caso nenhum parâmetro for passado
  if (!animal) {
    const expected = {};
    species.forEach(({ name, residents }) => {
      expected[name] = residents.length;
    });
    return expected;
  }
  // Caso parametro tenha chave gender
  const filteredSpecie = species.filter((specie) => specie.name === animal.specie);
  const individuos = filteredSpecie[0].residents;
  const female = individuos.filter((individuo) => individuo.sex === animal.gender);
  return (animal.gender) ? female.length : individuos.length;
  // return female.length;
  // Caso parametro tenha so a espécie
  // return individuos.length;
}

console.log(countAnimals({ specie: 'giraffes', gender: 'female' }));

module.exports = countAnimals;
