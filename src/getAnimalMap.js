const { species } = require('../data/zoo_data');

const regioes = ['NE', 'NW', 'SE', 'SW'];

const procurarRegioes = (regiao) => species.filter((specie) => specie.location === regiao);

const criarListaRegioesAnimais = () => {
  const objtRegioes = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  regioes.forEach((regiao) => Object.assign(objtRegioes[regiao],
    procurarRegioes(regiao).map((residents) => residents.name)));

  return objtRegioes;
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return criarListaRegioesAnimais();
  }
}

module.exports = getAnimalMap;
