const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const listOfResidents = data.species.find((id) => (id.name === animal)).residents;
  const listOfAges = listOfResidents.map((name) => (name.age >= age));
  const minAge = listOfAges.some((boolean) => (boolean === false));
  const isOlder = () => {
    if (minAge === true) return false;
    return true;
  };
  return isOlder();
}

console.log(getAnimalsOlderThan('penguins', 8));

module.exports = getAnimalsOlderThan;
