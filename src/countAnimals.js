const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const resultado = {};
    // tem que começar com o objeto vazio
    species.forEach((especie) => {
      // tem que usar o for each pq ele não retorna nada, então ele só confere, percorrendo tudo
      resultado[especie.name] = especie.residents.length;
      // apos percorrer tudo, pego o nome da espécie e  qtos residentes cada especie tem.
    });
    return resultado;
  }

  if (animal.sex) {
    return species.find(({ name }) => name === animal.specie).residents
    // usa a descontrução pra pesquisar direito o name da especie
      .filter(({ sex }) => sex === animal.sex).length;
  }

  return species.find(({ name }) => name === animal.specie).residents.length;
}

module.exports = countAnimals;

// filtra pelo sex pq tá descontruido, e se for igual ao parametro fica no filtro
// ai como o filtro faz um array, a gente pega e confere o tamanho do array
// ai depois é só pesquisar direto pelo nome, sem se preocupar com o genero.
