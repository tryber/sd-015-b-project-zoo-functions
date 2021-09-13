const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((idPesquisado) => ids.includes(idPesquisado.id));
}
// ajuda do Assis para corrigir o parametro passando qdo é mais de um id.
// modelo de função de acordo com o visto no https://www.freecodecamp.org/news/javascript-array-filter-tutorial-how-to-iterate-through-elements-in-an-array/

module.exports = getSpeciesByIds;
