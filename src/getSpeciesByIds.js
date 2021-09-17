const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// const arrayDeIDS = ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46']; // [DEBUG]

function getSpeciesByIds(...arrayDeIDS) {
  // seu código aqui
  const arrayFiltrado = [];
  species.filter((specie) => {
    arrayDeIDS.forEach((id) => {
      if (specie.id === id) {
        arrayFiltrado.push(specie);
        return arrayFiltrado;
      }
    });
    return arrayFiltrado;
  });
  return arrayFiltrado;
}
// const idsDeTeste = [
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46',
//   'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
// ],
// getSpeciesByIds(idsDeTeste);
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46')); // [DEBUG]
// console.log(getSpeciesByIds(idsDeTeste[0], idsDeTeste[1], idsDeTeste[2])); // [DEBUG]
// console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;

// LÓGICA DO DESENVOLVIMENTO:
// ** Adiciona o restParameter a função de Busca
// ** Busca dentro do data, os 'n' dados passados via array para '...ids'
// ** Retorna o resultado da Busca
// ** Se o array/Parâmetro passado for nulo ou vazio, retornar vazio
