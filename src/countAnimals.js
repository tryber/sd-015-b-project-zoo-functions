const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const todasSpecies = {};
    species.forEach((qtdCadaAnimal) => {
      todasSpecies[qtdCadaAnimal.name] = qtdCadaAnimal.residents.length;
    });
    return todasSpecies;
  }

  if (animal.sex) {
    return species.find((nomeSpecie) => nomeSpecie.name === animal.specie)
      .residents.filter((pesquisaGender) => pesquisaGender.sex === animal.sex).length;
  }

  const listarQtdAnimal = species.find(({ name }) => name === animal.specie);

  return listarQtdAnimal.residents.length;
}

module.exports = countAnimals;
