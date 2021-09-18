const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}
/**
 * Este requisito foi cumprido por mim tirando dúvidas com o Nícolas Firmo
 * em uma chamada pelo zoom e também com vista ao código da colega Marina Marques - Turma 15 - Tribo B
 */

module.exports = getSpeciesByIds;
