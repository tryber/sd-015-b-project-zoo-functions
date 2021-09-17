const data = require('../data/zoo_data');

const funcionarios = data.employees;
const animais = data.species;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const achaFuncionario = funcionarios.find((element) => element.id === id).responsibleFor;
  const primeiro = achaFuncionario[0];
  const achaEspecie = animais.find((element) => element.id === primeiro).residents;
  const maior = achaEspecie.reduce((acc, crr) => (acc.age > crr.age ? acc : crr));
  const retorno = [maior.name, maior.sex, maior.age];
  return retorno;
}

module.exports = getOldestFromFirstSpecies;
