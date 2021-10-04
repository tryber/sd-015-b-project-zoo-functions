const data = require('../data/zoo_data');

// const a = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  for (let i = 0; i < entrants.length; i += 1) {
    if (entrants[i].age < 18) {
      child += 1;
    } else if (entrants[i].age >= 50) {
      senior += 1;
    } else {
      adult += 1;
    }
  }
  const allEntrants = { child, adult, senior };
  return allEntrants;
}
// console.log(countEntrants(a));

function calculateEntry(entrants = []) {
  const { child, adult, senior } = countEntrants(entrants);
  return (child * 20.99) + (adult * 49.99) + (senior * 24.99);
}

module.exports = { calculateEntry, countEntrants };
