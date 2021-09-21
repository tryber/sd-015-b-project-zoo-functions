// Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;

const data = require('../data/zoo_data');

function countAnimals(animal) {
  // sem argumento
  if (!animal) {
    const result = {};
    data.species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }

  // com argumento
  if (animal.sex) {
    const selected = data.species.find(({ name }) => name === animal.specie).residents;
    const contByGender = selected.filter(({ sex }) => sex === animal.sex).length;
    return contByGender;
  }
  return data.species.find(({ name }) => name === animal.specie).residents.length;
}

module.exports = countAnimals;
