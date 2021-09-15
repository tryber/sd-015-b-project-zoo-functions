const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const todasSpecies = {};
    data.species.forEach((qtdCadaAnimal) => {
      todasSpecies[qtdCadaAnimal.name] = qtdCadaAnimal.residents.length;
    });
    return todasSpecies;
  }

  if (animal.gender) {
    return data.species.find((nomeSpecie) => nomeSpecie.name === animal.specie)
      .residents.filter((pesquisaGender) => pesquisaGender.sex === animal.gender).length;
  }

  const listarQtdAnimal = data.species.find(({ name }) => name === animal.specie);

  return listarQtdAnimal.residents.length;
}

module.exports = countAnimals;
