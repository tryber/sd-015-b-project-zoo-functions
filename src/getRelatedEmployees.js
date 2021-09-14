const data = require('../data/zoo_data');

function isManager(id) {
  // usa o some pq ele retorna true ou false
  // testa se o id do empregado contém o id gerente, tendo retorna true, não tendo, false.
  return data.employees.some((idEmpregado) => idEmpregado.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const gerente = data.employees.filter((id) => id.managers.includes(managerId));
  const listagerente = gerente.map((nome) => `${nome.firstName} ${nome.lastName}`);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return listagerente;
}

// https://www.freecodecamp.org/news/array-map-tutorial/
/*
How to Use the Index Argument
In addition to the value being iterated over, map takes in its index position as well.
This is very useful if you want to perform different kinds of operations depending on the index position of the item.
In the previous example, we appended a different suffix by checking for the index.
To find out the index position of each of our items within the array, we can do this:

let fullNames = ["wonderwoman", "spiderman", "antman", "ironman"]

fullNames.map(function(firstName, index) {
    console.log(${firstName} is at ${index} position) */

module.exports = { isManager, getRelatedEmployees };
