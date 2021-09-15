const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}
// metodo aprendido com os alunos Danielen Cestari Nunes e Assis Meneghetti Fabri

module.exports = getSpeciesByIds;
