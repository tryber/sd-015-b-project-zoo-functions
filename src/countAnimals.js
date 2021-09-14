const { species } = require("../data/zoo_data");
const data = require("../data/zoo_data");

function countAnimals(animal) {
  if (!animal) {
    return species.reduce(
      (acc, current) => ({ ...acc, [current.name]: current.residents.length }),
      {}
    );
  }
}

module.exports = countAnimals;
