const data = require('../data/zoo_data');

const { prices } = data;

const isChild = (entrant) => entrant.age < 18;
const isAdult = (entrant) => (entrant.age >= 18 && entrant.age < 50);
const isSenior = (entrant) => entrant.age >= 50;

const countChildren = (receivedGroup) => receivedGroup.filter((child) => isChild(child)).length;
const countAdults = (receivedGroup) => receivedGroup.filter((adult) => isAdult(adult)).length;
const countSeniors = (receivedGroup) => receivedGroup.filter((senior) => isSenior(senior)).length;

function countEntrants(entrants) {
  if (!entrants || entrants === {} || entrants === []) {
    return 0;
  }
  const totalsEntrants = {
    child: countChildren(entrants),
    adult: countAdults(entrants),
    senior: countSeniors(entrants),
  };
  return totalsEntrants;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totals = countEntrants(entrants);
  const adultsSum = totals.adult * prices.adult;
  const seniorsSum = totals.senior * prices.senior;
  const childrenSum = totals.child * prices.child;
  return adultsSum + seniorsSum + childrenSum;
}
/**
 * Citações:
 * Vi que a colega Gabrielle Murat postou dúvidas sobre este requisito no canal(slack) da Tribo e, como ao ler o fio da conversa não
 * consegui sanar a minha dúvida, consultei a PR dela para ver com que lógica ela conseguiu resolver a questão, link:
 * https://github.com/tryber/sd-015-b-project-zoo-functions/pull/120/commits/30dc6eaaaea3fabfb9fcccad58eeee249845d9cc
 * Não consegui aplicar a lógica dela na resolução do meu problema.
 * Então fui ao Stack Overflow, em https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%c3%a1-vazio-sem-jquery
 * e entendi que poderia verificar se um objeto está vazio com Object.keys().length (linha 26 acima).
 * Isto resolveu o meu problema para cumprir o requisito.
 */

module.exports = { calculateEntry, countEntrants };
