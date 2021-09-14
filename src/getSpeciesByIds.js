const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// utilizado o código do perfil de  lucas-peres-zoo-functions-project; identifiquei onde eu estava errando
function getSpeciesByIds(...ids) {
  // verifica se o id repassado é um array vazio;
  if (ids.length === 0) {
    return [];
  }
  const answer = [];
  // cria um loop com os id's inseridos
  ids.forEach((id) => {
    // preenche o array com os Id's repassados;
    const selectedId = species.find((specie) => specie.id === id);
    answer.push(selectedId);
  });
  return answer;
}

module.exports = getSpeciesByIds;
