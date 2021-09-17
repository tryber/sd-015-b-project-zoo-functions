const data = require('../data/zoo_data');

function verificarQuantidadeDeAnimalComChaveEspecie(animal) {
  const nomeDoAnimal = data.species.filter((nome) => nome.name === animal.specie);
  const quantidadeDeAnimal = nomeDoAnimal.map((quantidade) => quantidade.residents.length);
  return quantidadeDeAnimal[0];
}

function verificarQuantidadeDeAnimalComChaveEspecieESex(animal) {
  const animais = data.species.find((especie) => especie.name === animal.specie);
  const sexoDoAnimal = animais.residents.filter((sexo) => sexo.sex === animal.sex);
  const quantidadeDeAnimalPorSexo = sexoDoAnimal.length;
  return quantidadeDeAnimalPorSexo;
}

function countAnimals(animal) {
  // seu código aqui
  const listaDeAnimais = {};
  if (animal === undefined) {
    const quantidade = data.species.map((valor) => valor.residents.length);
    const especie = data.species.map((nome) => nome.name);
    especie.forEach((elemento, index) => { listaDeAnimais[elemento] = quantidade[index]; });
    return listaDeAnimais;
  }
  if (Object.keys(animal).length === 1) {
    const quantidadeComEspecie = verificarQuantidadeDeAnimalComChaveEspecie(animal);
    return quantidadeComEspecie;
  }
  const quantidadeComSexo = verificarQuantidadeDeAnimalComChaveEspecieESex(animal);
  return quantidadeComSexo;
}

module.exports = countAnimals;
