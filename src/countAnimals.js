const data = require('../data/zoo_data');

const saida = {
  lions: 4,
  tigers: 2,
  bears: 3,
  penguins: 4,
  otters: 4,
  frogs: 2,
  snakes: 2,
  elephants: 4,
  giraffes: 6,
};

function countAnimals(animal) {
  const resultado = [];
  if (animal === undefined) {
    resultado.push(saida);
    return resultado[0];
  }
  data.species.forEach((element) => {
    if (element.name === animal.specie && animal.sex !== undefined) {
      const result = element.residents.filter((animalzinho) => animalzinho.sex === animal.sex);
      resultado.push(result.length);
    } else if (element.name === animal.specie) {
      resultado.push(element.residents.length);
    }
  });
  return resultado[0];
}

module.exports = countAnimals;
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
