const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const vazio = {};
    species.forEach((element) => {
      vazio[element.name] = element.residents.length;
    });
    return vazio;
  }
  const Quantidade = Object.entries(animal).length;
  const ValorDeAnimal = Object.values(animal);

  if (Quantidade === 1) {
    return species.find((element) => element.name === ValorDeAnimal[0]).residents.length;
  }

  if (Quantidade === 2) {
    return species.find((element) => element.name === ValorDeAnimal[0])
      .residents.filter((elemento) => elemento.sex === ValorDeAnimal[1]).length;
  }
}
module.exports = countAnimals;
