const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui

  const funcionario = data.employees.find((responsavel) => responsavel.id === id);
  const idAnimal = funcionario.responsibleFor[0];
  const fichaDaEspecie = data.species.find((especie) => especie.id === idAnimal);
  const maiorIdade = fichaDaEspecie.residents.map((ano) => ano.age);
  maiorIdade.sort((a, b) => b - a);
  const infomacaoDosAnimais = fichaDaEspecie.residents.find((idade) => idade.age === maiorIdade[0]);
  const resultado = [infomacaoDosAnimais.name, infomacaoDosAnimais.sex, infomacaoDosAnimais.age];
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
