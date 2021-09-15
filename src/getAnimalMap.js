const { species } = require('../data/zoo_data');

const animais = (opcao, especie) => especie.residents.reduce((acumulador, animal) => {
  if (opcao.sex === animal.sex) {
    acumulador.push(animal.name);
  }

  if (!opcao.sex) {
    acumulador.push(animal.name);
  }
  return acumulador;
}, []);

function getAnimalMap(opcao = {
  includeNames: false, sorted: false, sex: false }) {
  const listaFinalPesquisa = species.reduce((todosAnimais, especie) => {
    if (opcao.includeNames) {
      const listaAnimais = animais(opcao, especie);
      if (opcao.sorted) {
        listaAnimais.sort();
      }
      todosAnimais[especie.location].push({ [especie.name]: listaAnimais });
    } else {
      todosAnimais[especie.location].push(especie.name);
    }
    return todosAnimais;
  },
  { NE: [], NW: [], SE: [], SW: [] });

  return listaFinalPesquisa;
}

module.exports = getAnimalMap;
