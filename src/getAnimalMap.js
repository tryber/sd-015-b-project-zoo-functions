const data = require('../data/zoo_data');

const isOnlySpicies = (animal) => !animal || !animal.includeNames;

const filterBySex = (residents, animal) =>
  residents.filter(({ sex: residentSex }) => animal.sex === residentSex);

const getResidentNames = (animal, residents, specieName) => {
  const filteredResidents = animal.sex ? filterBySex(residents, animal) : residents;
  let residentNames = [...filteredResidents.map((resident) => resident.name)];
  residentNames = animal.sorted ? residentNames.sort() : residentNames;
  const result = {};
  result[specieName] = residentNames;
  return result;
};

const getAnimalByLocation = (animal) =>
  data.species.reduce((acc, { location, name: specieName, residents }) => {
    acc[location] = acc[location] || [];

    const specieInfo = isOnlySpicies(animal)
      ? specieName
      : getResidentNames(animal, residents, specieName);

    acc[location].push(specieInfo);

    return acc;
  }, {});

function getAnimalMap(animal) {
  // seu código aqui
  const animalMap = getAnimalByLocation(animal);
  return animalMap;
}
getAnimalMap({ includeNames: true, sorted: true });
module.exports = getAnimalMap;
