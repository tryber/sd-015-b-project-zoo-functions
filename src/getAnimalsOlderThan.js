const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const actual = data.species.filter((item) =>
    item.name === animal)[0].residents.map((item) => item).length;
  const filtered = data.species.filter((item) =>
    item.name === animal)[0].residents.filter((item) => item.age > age).length;
  return (actual === filtered);
}

module.exports = getAnimalsOlderThan;
