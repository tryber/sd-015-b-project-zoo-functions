const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
// primeiro encontrar o id
    const find = species.filter((elemento) => ids.includes(elemento.id));
// imprimir o elemento
    return find;
}

module.exports = getSpeciesByIds;

//primeiro commit

