const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) return { ...acc, child: acc.child += 1 };
    if (entrant.age >= 18 && ageEntrant < 50) return { ...acc, adult: acc.adult += 1 };
    if (entrant.age >= 50) {return { ...acc, senior: acc.senior += 1 } }
  }, {adult: 0, child: 0, senior: 0});
}

function calculateEntry(entrants) {
  // seu código aqui
  let valorTotal = 0;
  const arrayNovo = [];
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  // const functionEntrants = entrants.forEach( (entrant) => { // Para cada pessoa no Array Recebido
  //   arrayNovo.push(entrant.age); // Capture sua idade
  //   // console.log(arrayNovo); // [DEBUG] Verifica entrada do Array
  // });
  const contagem = countEntrants(entrants); // Chama a função que irá contar quantas pessoas de cada faixa etária entrarão,
  // console.log(contagem); // [DEBUG] Verifica se o retorno é o esperado, com o formato correto.
  // passando como parâmetro, o valor do array com a idade de Cada um.
  const valorAdulto = 49.99;
  const valorChild = 20.99;
  const valorSenior = 24.99;
  return (contagem.adult * valorAdulto) + (contagem.child * valorChild) + (contagem.senior * valorSenior);
  // console.log(contagem.adult, contagem.child, contagem.senior);
  // console.log(valorTotal);
  // return valorTotal;
}

const pessoasVisitantes = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

// calculateEntry({ name: 'Lara Carvalho', age: 5 }, { name: 'Frederico Moreira', age: 5 });
// calculateEntry(pessoasVisitantes[0],
//   pessoasVisitantes[1],
//   pessoasVisitantes[2],
//   pessoasVisitantes[3],
//   pessoasVisitantes[4],
//   pessoasVisitantes[5]);
// calculateEntry();
calculateEntry(pessoasVisitantes);

module.exports = { calculateEntry, countEntrants };

// LÓGICA DA FUNÇÃO:
// ** Recebe um Array de Visitantes
// ** Implementa uma HoF que verifica a idade de cada pessoa nesse array 'obj.age'
// ** Com base no [Range - Intervalo] de idades, a faixa etária é uma {child < 18, adult >= 18 && < 50, senior >= 50}
// **** Realizar a verificação da idade de cada elemento;
// **** Adicionar 1 unidade ao contador da faixa etária
// **** Retornar, ao final do array, o valor da soma de cada faixa etária
