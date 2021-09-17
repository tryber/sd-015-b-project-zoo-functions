const data = require('../data/zoo_data');

const findIndividualsOnTheSpecie = ({ specie: receivedSpecie, sex: receivedSex }) => {
  const foundedSpecie = data.species.find((specie) => specie.name === receivedSpecie);
  if (!receivedSex) {
    const newObjectValue = foundedSpecie.residents.length;
    return newObjectValue;
  }
  const thisResidents = foundedSpecie.residents;
  const newObjectValue = thisResidents.filter((resident) => resident.sex === receivedSex).length;
  return newObjectValue;
};
function countAnimals(animal) {
  if (!animal) {
    const numbersPerSpecie = {};
    data.species.forEach((specie) => {
      const newObjectKey = specie.name;
      const newObjectValue = specie.residents.length;
      const newObject = { [newObjectKey]: newObjectValue };
      Object.assign(numbersPerSpecie, newObject);
    });
    console.log(numbersPerSpecie);
    return numbersPerSpecie;
  }
  return findIndividualsOnTheSpecie(animal);
}
// countAnimals();
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'penguins', sex: 'male' }));
console.log(countAnimals({ specie: 'penguins', sex: 'female' }));

module.exports = countAnimals;
