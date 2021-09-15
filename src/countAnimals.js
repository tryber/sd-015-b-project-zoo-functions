// - se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor; {animalUm: 1, animalDois: 2, animalTres: 3} - para todos os animais
// - com argumento animal, retorna objeto com total de bichos da mesma espécie.
// - com argumento e sexo, retorna objeto com total de bichos da mesma espécie e sexo.

const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // sem parâmetro
  if (!animal) {
    const animalSpecie = {};
    species.forEach(({ name, residents }) => {
      animalSpecie[name] = residents.length;
    });
    return animalSpecie;
  }

  // com parâmetro
  const specieSelected = species.find((specie) => specie.name === animal.specie);
  if (animal.gender) {
    const gender = specieSelected.residents.filter((resident) => resident.sex === animal.gender);
    return gender.length;
  }
  return specieSelected.residents.length;
}

module.exports = countAnimals;
