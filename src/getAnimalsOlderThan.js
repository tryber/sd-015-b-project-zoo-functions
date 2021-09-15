const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animalName, minAge) => {
  const animalData = data.species.find((specie) => specie.name === animalName);
  let boolean = true;
  animalData.residents.forEach((resident) => {
    if (resident.age < minAge) boolean = false;
  });
  return boolean;
};

module.exports = getAnimalsOlderThan;
