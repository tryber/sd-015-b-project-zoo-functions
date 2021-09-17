const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const filtraIdDoFuncionario = employees.find((funcionario) => funcionario.id === id);
  const IdDoPrimeiroAnimalDoFuncionario = filtraIdDoFuncionario.responsibleFor
    .find((animal) => animal);
  const filtraOAnimal = species.find((codigo) => codigo.id === IdDoPrimeiroAnimalDoFuncionario);
  const filtraOResidenteMaisVelho = filtraOAnimal.residents.reduce((acc, atual, index, array) => {
    if (atual.age > acc.age) {
      return atual;
    }
    return acc;
  });
  const listaFinal = [filtraOResidenteMaisVelho.name, filtraOResidenteMaisVelho
    .sex, filtraOResidenteMaisVelho.age];
  return listaFinal;
}

module.exports = getOldestFromFirstSpecies;
