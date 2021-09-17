const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // pega todos os bichos gerenciados pelo funcionário
  const animalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = data.species.find((specie) => specie.id === animalId).residents;

  // descobre o bicho mais velho dentre os gerenciados
  const oldest = animals.sort((a, b) => b.age - a.age)[0];

  // devolve array com nome, sexo e idade do bicho
  const oldestAnimal = [];
  oldestAnimal.push(oldest.name);
  oldestAnimal.push(oldest.sex);
  oldestAnimal.push(oldest.age);

  return oldestAnimal;
}

getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f');

module.exports = getOldestFromFirstSpecies;
