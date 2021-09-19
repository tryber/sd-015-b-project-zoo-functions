const data = require('../data/zoo_data');

function semParametro() {
  const retornoAnimais = {};
  data.species.forEach((registroAnimal) => {
    retornoAnimais[`${registroAnimal.name}`] = registroAnimal.residents.length;
  });
  return retornoAnimais;
}

function animalParametro(animal) {
  const especie = data.species.find((especies) => especies.name === animal.specie);
  const individuosEspecie = especie.residents.length;
  return individuosEspecie;
}

function animalGeneroParametro(animal) {
  const especie = data.species.find((especies) => especies.name === animal.specie);
  const generos = especie.residents.filter((genero) => genero.sex === animal.sex);
  const individosEmUmGenero = generos.length;
  return individosEmUmGenero;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return semParametro();
  }
  if (Object.entries(animal).length === 1) {
    return animalParametro(animal);
  }
  if (Object.entries(animal).length === 2) {
    return animalGeneroParametro(animal);
  }
}

module.exports = countAnimals;
