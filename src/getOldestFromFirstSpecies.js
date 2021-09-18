const { employees, species } = require("../data/zoo_data");

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const primeiraEspecie = employees.find((pessoa) => pessoa.id === id)
    .responsibleFor[0];
  const animal = species.find((specie) =>
    specie.id === primeiraEspecie)
    .residents.sort((age1, age2) => age2.age - age1.age);
  return Object.values(animal[0]);
}

module.exports = getOldestFromFirstSpecies;
