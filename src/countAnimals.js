const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const object = {};

    data.species.forEach((element, index) => {
      object[element.name] = element.residents.length;
    });
    return object;
  } if (animal.specie && animal.sex === undefined) {
    const dataSpecies = data.species.find((specie) => specie.name === animal.specie);
    return dataSpecies.residents.length;
  } if (Object.keys(animal)[1] === 'sex') {
    const specieAndSex = data.species.find((bicho) => bicho.name === animal.specie);
    return specieAndSex.residents.filter((wildAnimal) => wildAnimal.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
console.log(countAnimals());// OK
console.log(countAnimals({ specie: 'penguins' }));// OK
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));// OK
