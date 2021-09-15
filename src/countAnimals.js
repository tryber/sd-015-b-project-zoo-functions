const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
  // finding specie
  const findingAnimals = species.map((elemento) => elemento.name);
  // filtering residents
  const findingResidest = species.map((elemento) => elemento.residents.length);
  // construindo objeto
  const obj = {};
  for (let i = 0; i < findingAnimals.length; i++) {
    const animal = findingAnimals[i];
    obj[animal] = findingResidest;
  }
  return obj;
  }

  if (animal.gender === undefined) {
  // finding specie
  const specie = animal.specie;
  // finding specie
  const findingAnimal = species.find((elemento) => specie.includes(elemento.name));
  // filtering residents
  return findingAnimal.residents.length;
  }

  if (animal.gender !== undefined) {
  // finding specie
  const specie = animal.specie;
  // finding specie
  const findingAnimal = species.find((elemento) => specie.includes(elemento.name));
  // filtering gender
  const sex = animal.gender;
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