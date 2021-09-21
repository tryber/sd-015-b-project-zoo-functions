const data = require('../data/zoo_data');

function callback(a, b) {
  if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  }

  return 0;
}

function getOldestFromFirstSpecies(id) {
  const array = [];
  data.employees.forEach((element) => {
    if (element.id === id) {
      data.species.forEach((animal) => {
        if (animal.id === element.responsibleFor[0]) {
          array.push(animal.residents.sort(callback)[0].name);
          array.push(animal.residents.sort(callback)[0].sex);
          array.push(animal.residents.sort(callback)[0].age);
        }
      });
    }
  });
  return array;
}

module.exports = getOldestFromFirstSpecies;
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
