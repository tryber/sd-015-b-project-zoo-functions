const { species } = require('../data/zoo_data');
// obs: criação de funções fora pois, lint deu erro pela qtd de linhas, muito grande
const selectAnimalByname = (animal) => species.find((specie) => specie.name === animal.specie);

const selectAnimalByGender = (getAnimal, animal) => {
  const getAnimalByGender = getAnimal.residents.filter((resident) => resident.sex === animal.sex);
  return getAnimalByGender.length;
};

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const animals = {};
    species.forEach(({ name, residents }) => { animals[name] = residents.length; });
    return animals;
  }

  const selectAnimal = selectAnimalByname(animal);
  if (animal.sex) {
    return selectAnimalByGender(selectAnimal, animal);
  }

  return selectAnimal.residents.length;
}

module.exports = countAnimals;
