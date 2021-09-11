const data = require("../data/zoo_data");

function countEntrants(entrants) {
  // seu código aqui
  const analysis = entrants.reduce(
    (acc, { age }) => {
      console.log(acc);
      if (age < 18) {
        acc.child += 1;
      } else if (age >= 18 && age < 50) {
        acc.adult += 1;
      } else {
        acc.senior += 1;
      }
      return acc;
    },
    { child: 0, adult: 0, senior: 0 }
  );
  return analysis;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) {return 0}
  const {
    child: childTotal,
    adult: adultTotal,
    senior: seniorTotal,
  } = countEntrants(entrants);

  const {
    child: childPrice,
    adult: adultPrice,
    senior: seniorPrice,
  } = data.prices;

  let result = 0;
  result += childTotal * childPrice;
  result += adultTotal * adultPrice;
  result += seniorTotal * seniorPrice;

  return result;
}

const entrants = [
  { name: "Lara Carvalho", age: 5 },
  { name: "Frederico Moreira", age: 5 },
  { name: "Pedro Henrique Carvalho", age: 5 },
  { name: "Maria Costa", age: 18 },
  { name: "Núbia Souza", age: 18 },
  { name: "Carlos Nogueira", age: 50 },
];
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
