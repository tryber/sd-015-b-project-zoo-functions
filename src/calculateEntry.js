const data = require('../data/zoo_data');

const saida = {};

function countEntrants(entrants) {
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const criancas = [];
  const adultos = [];
  const idosos = [];
  entrants.forEach((element) => {
    if (element.age < 18) {
      criancas.push(element);
    } else if (element.age < 50) {
      adultos.push(element);
    } else if (element.age >= 50) {
      idosos.push(element);
    }
  });
  saida.child = criancas.length; saida.adult = adultos.length; saida.senior = idosos.length;
  return saida;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const saidaFuncao = countEntrants(entrants);
  let resultado = 0;
  resultado = saidaFuncao.child * 20.99 + saidaFuncao.adult * 49.99 + saidaFuncao.senior * 24.99;
  return resultado;
}

module.exports = { countEntrants, calculateEntry };
// console.log(countEntrants({}));
// console.log(calculateEntry(entrada));
