const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let idade = 0;
  const funcionarioId = data.employees.find((empregado) => empregado.id === id);
  const idPrimeiraEspecie = funcionarioId.responsibleFor[0];
  const primAnimal = data.species.find((infoPrimAnimal) => infoPrimAnimal.id === idPrimeiraEspecie);
  for (let contador = 0; contador < primAnimal.residents.length; contador += 1) {
    if (primAnimal.residents[contador].age > idade) {
      idade = 0;
      idade += primAnimal.residents[contador].age;
    }
  }
  const animalMaisVelho = primAnimal.residents.find((animalVelho) => animalVelho.age === idade);
  const dadosAnimalMaisVelho = [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
  return dadosAnimalMaisVelho;
}
getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f');

module.exports = getOldestFromFirstSpecies;
