const data = require('../data/zoo_data');

function getAnimalLocation(animal) {
  const animalArray = [];
  const getAnimal = data.species.find((specie) => specie.name === animal);
  if (getAnimal.location === 'NE') {
    animalArray.push(getAnimal.name);
  }
  if (getAnimal.location === 'NW') {
    animalArray.push(getAnimal.name);
  }
  if (getAnimal.location === 'SE') {
    animalArray.push(getAnimal.name);
  }
  if (getAnimal.location === 'SW') {
    animalArray.push(getAnimal.name);
  }
  return animalArray; 
}
function getAnimalMap(options) {
  // seu código aqui
  const result = {};
  const allAnimals = data.species.map((specie) => specie.name);
  const locationAndAnimals = data.species.forEach((specie) => {
    result[specie.location] = allAnimals.map((getAnimalLocation));
  });
  return locationAndAnimals;
}

console.log(getAnimalLocation('tigers'))
console.log(getAnimalMap())
module.exports = getAnimalMap;
