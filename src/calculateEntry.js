//const { prices } = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach(({ age }) => {
    if (age < 18) {
      child += 1;
    } if (age >= 18 && age < 50) {
      adult += 1;
    } if (age >= 50) {
      senior += 1;
    }
  });
  const obj = { child, adult, senior };
  return obj;
};

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
