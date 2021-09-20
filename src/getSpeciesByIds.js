const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const resposta = [];
  if (ids === undefined) {
    return [];
  }
  ids.forEach((id) => {
    const especieSelecionada = data.species.find((especie) => especie.id === id);
    resposta.push(especieSelecionada);
  });
  return resposta;
}
module.exports = getSpeciesByIds;
