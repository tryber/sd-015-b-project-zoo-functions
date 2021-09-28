const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...param) {
  const filtrado = []
  param.forEach((id) => {
    const filtro = species.filter(specie => specie.id === id)
    filtrado.push(...filtro)
  })
  return filtrado
}
    
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'))
module.exports = getSpeciesByIds;
