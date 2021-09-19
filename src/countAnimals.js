const data = require('../data/zoo_data');

// Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;

const totalAnimals = () => {
  const obj = {};
  data.species.map((item) => {
    obj[`${item.name}`] = item.residents.length;
    return true;
  });
  return obj;
};

// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
const totalBySpecies = (specie) => {
  const animal = Object.values(specie)[0];
  const filter = data.species.filter((item) => item.name === animal)[0].residents.length;
  return filter;
};

// Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.
const totalBySpeciesAndSex = (specieSex) => {
  const animal = Object.values(specieSex);
  const filter = data.species.filter((item) =>
    item.name === animal[0])[0].residents.filter((sex) =>
    sex.sex === animal[1]).length;
  return filter;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return totalAnimals();
  }
  if (Object.values(animal).length === 1) {
    return totalBySpecies(animal);
  }
  if (Object.values(animal).length === 2) {
    return totalBySpeciesAndSex(animal);
  }
}

module.exports = countAnimals;
