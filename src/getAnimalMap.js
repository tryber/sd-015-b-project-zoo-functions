const data = require('../data/zoo_data');

function filtered(cur, sex, sorted, includeNames) {
  /* caso tenha 'sex', filtra os animais por 'sex' */
  let createObj = sex == null
    ? cur.residents
    : cur.residents.filter((f) => f.sex === sex);

  /* caso nao tenha 'includesNames' retorna apenas os nomes das especies */
  if (includeNames == null) {
    return cur.name; // 'name' aqui é a especie
  }
  /* createObj e um array de objetos */
  /* caso tenha 'includesNames', pega os nomes dos animais */
  createObj = createObj.map((t) => t.name);
  /*  ordena caso necessario */
  createObj = sorted ? createObj.sort() : createObj;
  return { [cur.name]: createObj };
}

function getAnimalsFiltered(sex = null, includeNames = null, sorted = null) {
  return data.species.reduce((acc, cur) => {
    acc[cur.location] = acc[cur.location] || [];
    acc[cur.location].push(filtered(cur, sex, sorted, includeNames));
    return acc;
  }, {});
}

function getAnimals(options) {
  if (options) {
    const { sex, includeNames, sorted } = options;
    return getAnimalsFiltered(sex, includeNames, sorted);
  }
  return getAnimalsFiltered();
}

module.exports = getAnimals;
