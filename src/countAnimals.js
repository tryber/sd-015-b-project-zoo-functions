const { species } = require('../data/zoo_data');

function buildDefault() {
  return {
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
}

function countAnimals(info) {
  let functionReturn;
  if (!info) {
    functionReturn = buildDefault();
  } else {
    const animalSpecie = info.specie;
    const selSpecie = species.filter((animal) => animal.name === animalSpecie)[0];
    const animalQuantity = selSpecie.residents.length;
    functionReturn = animalQuantity;
    if (info.gender) {
      const animalGender = info.gender;
      const selGender = selSpecie.residents.filter((member) => member.sex === animalGender).length;
      functionReturn = selGender;
    }
  }
  console.log(functionReturn);
  return functionReturn;
}

countAnimals();
// countAnimals();
module.exports = countAnimals;
