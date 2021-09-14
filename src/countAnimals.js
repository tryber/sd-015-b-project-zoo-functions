const data = require('../data/zoo_data');
// animal.name: animal.residents.length
function countAnimals(animal) {
  // const getAnimal = data.species.find((specie) => specie.name === animal);
  // const howManyResidents = getAnimal.residents.length;
  if (!animal) {
    const howManyAnimals = {};
    data.species.forEach((specie) => {
      howManyAnimals[`${specie.name}`] = specie.residents.length;
    });
    return howManyAnimals;
  }
  const getAnimal = data.species.find((specie) => specie.name === animal.specie);
  const howManyResidents = getAnimal.residents;

  return (!animal.gender) ? howManyResidents.length : howManyResidents.filter((resident) =>
    resident.sex === animal.gender).length;
}

countAnimals({ specie: 'penguins' });

module.exports = countAnimals;
