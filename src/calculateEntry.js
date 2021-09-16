const data = require('../data/zoo_data');

function countEntrants(entradas) {
  const kids = entradas.filter((entrada) => entrada.age < 18);
  const fdd = entradas.filter((entrada) => (entrada.age >= 18 && entrada.age < 50));
  const idoso = entradas.filter((entrada) => entrada.age >= 50);
  return { child: kids.length, adult: fdd.length, senior: idoso.length };
}

function calculateEntry(entradas) {
  if (!entradas || entradas.length === undefined) { // o tamanho do objeto que dá undefined se for vazio
    return 0;
  }
  const todosVisitantes = countEntrants(entradas);
  const valorEntradas = todosVisitantes.child * 20.99
    + todosVisitantes.adult * 49.99 + todosVisitantes.senior * 24.99;
  return valorEntradas;
}

module.exports = { calculateEntry, countEntrants };
