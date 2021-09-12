const data = require("../data/zoo_data");

function getAnimalMap(animal) {
  // seu código aqui
  const animalMap = data.species.reduce(
    (acc, { location, name: specie, residents }) => {
      acc[location] = acc[location] || [];
      let specieInfo = {};
      if (!animal || !animal.includeNames) {
        specieInfo = specie;
      } else if (animal.includeNames) {
        const filteredResidents = animal.sex ? residents.filter(({sex:residentSex}) => animal.sex === residentSex) : residents;
        let residentNames = [...filteredResidents.map((resident) => resident.name)];
        residentNames = animal.sorted ? residentNames.sort() : residentNames;
        specieInfo[specie] = residentNames;
      }
      acc[location].push(specieInfo);

      return acc;
    },
    {}
  );
  return animalMap;
}
const test = getAnimalMap({ includeNames: true, sorted: true, sex: 'male'});
module.exports = getAnimalMap;
