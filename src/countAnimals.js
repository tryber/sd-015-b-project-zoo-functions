const { species } = require('../data/zoo_data');

function todosAnimais() {
  const listaDeTodosAnimais = {};
  species.forEach((animais) => {
    listaDeTodosAnimais[`${animais.name}`] = animais.residents.length;
  });
  return listaDeTodosAnimais;
}

function animalPorEspecie(animal) {
  const animalEspecie = species.find((especie) => especie.name === animal.specie);
  return animalEspecie.residents.length;
}

function animalPorEspecieSexo(animal) {
  const animalEspecie = species.find((especie) => especie.name === animal.specie);
  const animalEspecieSexo = animalEspecie.residents
    .filter((especieSexo) => especieSexo.sex === animal.sex);
  return animalEspecieSexo.length;
}
function countAnimals(animal) {
  // seu código aqu
  if (animal === undefined) {
    return todosAnimais();
  }
  if (Object.entries(animal).length === 1) {
    return animalPorEspecie(animal);
  }
  if (Object.entries(animal).length === 2) {
    return animalPorEspecieSexo(animal);
  }
}

module.exports = countAnimals;
