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
  if (animal.specie && animal.gender === undefined) {
    return data.species.find((nomeSpecie) => nomeSpecie.name === animal.specie).residents.length;
  }
  if (animal.gender) {
    return data.species.find((nomeSpecie) => nomeSpecie.name === animal.specie)
      .residents.filter((pesquisaGender) => pesquisaGender.sex === animal.gender).length;
  }
}

module.exports = countAnimals;
console.log(countAnimals({ specie: 'giraffes', gender: 'female' }));
