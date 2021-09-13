const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const obj = {};
    data.species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  } 
  if (animal.specie) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }
  if (animal.gender) {
    return data.species.find((specie) => specie.name === animal.specie)
      .residents.filter((e) => e.sex === animal.gender);
  }
}

console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'giraffes', gender: 'female' }));

module.exports = countAnimals;
