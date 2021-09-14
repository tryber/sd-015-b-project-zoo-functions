const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, person) => {
    if (person.age < 18) {
      return { ...acc, child: acc.child + 1 };
      // Aqui é feito um if caso passe, é retornado um objeto que possue
      // ...acc, que é o espalhamento do acumulador dentro do objeto e
      // dizemos que a key child possue o  valor o acc.child +1, ou seja
      //  ele vai somar 1 ao valor trago pelo acumulador e assim sucessivamente.
    } if (person.age < 50) {
      return { ...acc, adult: acc.adult + 1 };
    } if (person.age >= 50) {
      return { ...acc, senior: acc.senior + 1 };
    }
    return { ...acc };
    // caso o valor passado não entre em nenhum if é retornado apenas o acc.
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  //  acessado: https://github.com/tryber/sd-015-b-project-zoo-functions/blob/annie-haurani-zoo-functions/src/calculateEntry.js
  if (!entrants || Object.keys(entrants).length === 0) {
    // Aqui caso entrants seja undefined,null... ou o tamanho do array
    //  gerado pelo object.kays(entrants) seja 0 retorna 0
    return 0;
    //  ...
  }
  const numeroPessoas = countEntrants(entrants);
  return (prices.child * numeroPessoas.child)
  // aqui ele faz uma simples multiplicação entre o preço que um child paga
  // por o numero de individuos dentro da chave child existem.
    + (prices.adult * numeroPessoas.adult)
    + (prices.senior * numeroPessoas.senior);
}

module.exports = { calculateEntry, countEntrants };
