const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids. - Caso receba nenhum parâmetro, necessário retornar um array vazio;
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids.
  if (!ids) {
    return [];
  }
  const newArray = [];
  species.forEach((specie) => {
    ids.forEach((id) => {
      if (id === specie.id) {
        newArray.push(specie);
      }
    });
  });
  return newArray;
}

module.exports = getSpeciesByIds;
