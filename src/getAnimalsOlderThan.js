const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
<<<<<<< HEAD
    const checkSpecie = species.find((specie) => specie.name === animal);
  
    const checkAge = checkSpecie.residents.every((resident) => resident.age >= age);
    return checkAge;
  }
=======
  // seu código aqui
  const { residents } = species.find((speciee) => speciee.name === animal);

  const checkAge = residents.every((resident) => resident.age >= age);
  return checkAge;
}
>>>>>>> b5dfe84c0416f4eb5b50f8db887ec84d06cb99dd

module.exports = getAnimalsOlderThan;
