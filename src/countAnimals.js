const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    // finding specie
    const findingAnimals = species.map((elemento) => elemento.name);
    // filtering residents
    const findingResidents = species.map((elemento) => elemento.residents.length);
    // construindo objeto
    const obj = {};
    for (let i = 0; i < findingAnimals.length; i += 1) {
      for (let j = 0; j < findingResidents.length; j += 1) {
        obj[findingAnimals[i]] = findingResidents[i];
      }
    }
    return obj;
  }

  if (animal.sex === undefined) {
  // finding specie
    const { specie } = animal;
    // finding specie
    const findingAnimal = species.find((elemento) => specie.includes(elemento.name));
    // filtering residents
    return findingAnimal.residents.length;
  }

  if (animal.sex !== undefined) {
  // finding specie
    const { specie } = animal;
    // finding specie
    const findingAnimal = species.find((elemento) => specie.includes(elemento.name));
    // filtering sex
    const { sex } = animal;
    // finding specie gender
    const animales = findingAnimal.residents;
    // filtrar o genero dos animales para conta-los
    const filteringGender = animales.filter((elemento) => {
      if (elemento.sex === sex) {
        return elemento;
      }
    });
    return filteringGender.length;
  }
}

module.exports = countAnimals;

console.log(countAnimals());
