const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getMapSpecies() {
  const NE = species.filter((specie) => specie.location.includes('NE'));
  const NeSpecies = [];
  NE.forEach((specie) => NeSpecies.push(specie.name));
  const NW = species.filter((specie) => specie.location.includes('NW'));
  const NwSpecies = [];
  NW.forEach((specie) => NwSpecies.push(specie.name));
  const SE = species.filter((specie) => specie.location.includes('SE'));
  const SeSpecies = [];
  SE.forEach((specie) => SeSpecies.push(specie.name));
  const SW = species.filter((specie) => specie.location.includes('SW'));
  const SwSpecies = [];
  SW.forEach((specie) => SwSpecies.push(specie.name));
  return { NE: NeSpecies, NW: NwSpecies, SE: SeSpecies, SW: SwSpecies };
}

function getSpeciesIncludeNames() {
  const NE = species.filter((specie) => specie.location.includes('NE'));
  const NEanimals = NE.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name),
  }));
  const NW = species.filter((specie) => specie.location.includes('NW'));
  const NWanimals = NW.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name),
  }));
  const SE = species.filter((specie) => specie.location.includes('SE'));
  const SEanimals = SE.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name),
  }));
  const SW = species.filter((specie) => specie.location.includes('SW'));
  const SWanimals = SW.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name),
  }));
  return { NE: NEanimals, NW: NWanimals, SE: SEanimals, SW: SWanimals };
}

function getSpeciesIncludeNamesSorted() {
  const NE = species.filter((specie) => specie.location.includes('NE'));
  const NEanimals = NE.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name).sort(),
  }));
  const NW = species.filter((specie) => specie.location.includes('NW'));
  const NWanimals = NW.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name).sort(),
  }));
  const SE = species.filter((specie) => specie.location.includes('SE'));
  const SEanimals = SE.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name).sort(),
  }));
  const SW = species.filter((specie) => specie.location.includes('SW'));
  const SWanimals = SW.map((animal) => ({
    [animal.name]: animal.residents.map((resident) => resident.name).sort(),
  }));
  return { NE: NEanimals, NW: NWanimals, SE: SEanimals, SW: SWanimals };
}

function getSpeciesIncludeNamesSex(opt) {
  const NE = species.filter((specie) => specie.location.includes('NE'));
  const NEanimals = NE.map((amls) => ({
    [amls.name]: amls.residents.filter((res) => res.sex.includes(opt.sex)).map((aml) => aml.name),
  }));
  const NW = species.filter((specie) => specie.location.includes('NW'));
  const NWanimals = NW.map((amls) => ({
    [amls.name]: amls.residents.filter((res) => res.sex.includes(opt.sex)).map((aml) => aml.name),
  }));
  const SE = species.filter((specie) => specie.location.includes('SE'));
  const SEanimals = SE.map((amls) => ({
    [amls.name]: amls.residents.filter((res) => res.sex.includes(opt.sex)).map((aml) => aml.name),
  }));
  const SW = species.filter((specie) => specie.location.includes('SW'));
  const SWanimals = SW.map((amls) => ({
    [amls.name]: amls.residents.filter((res) => res.sex.includes(opt.sex)).map((aml) => aml.name),
  }));
  return { NE: NEanimals, NW: NWanimals, SE: SEanimals, SW: SWanimals };
}

function getSpeciesIncludeNamesSexSorted(opt) {
  const NE = species.filter((specie) => specie.location.includes('NE'));
  const NEanimals = NE.map((as) => ({
    [as.name]: as.residents.filter((res) => res.sex.includes(opt.sex)).map((a) => a.name).sort(),
  }));
  const NW = species.filter((specie) => specie.location.includes('NW'));
  const NWanimals = NW.map((as) => ({
    [as.name]: as.residents.filter((res) => res.sex.includes(opt.sex)).map((a) => a.name).sort(),
  }));
  const SE = species.filter((specie) => specie.location.includes('SE'));
  const SEanimals = SE.map((as) => ({
    [as.name]: as.residents.filter((res) => res.sex.includes(opt.sex)).map((a) => a.name).sort(),
  }));
  const SW = species.filter((specie) => specie.location.includes('SW'));
  const SWanimals = SW.map((as) => ({
    [as.name]: as.residents.filter((res) => res.sex.includes(opt.sex)).map((a) => a.name).sort(),
  }));
  return { NE: NEanimals, NW: NWanimals, SE: SEanimals, SW: SWanimals };
}

function getFunction(options) {
  if (options.sorted === true && typeof options.sex === 'string') {
    return getSpeciesIncludeNamesSexSorted(options);
  }
  if (options.sorted === true) {
    return getSpeciesIncludeNamesSorted();
  }
  if (typeof options.sex === 'string') {
    return getSpeciesIncludeNamesSex(options);
  }
  return getSpeciesIncludeNames();
}

function getAnimalMap(options) {
  if (options === undefined) {
    return getMapSpecies();
  }
  if (options.includeNames === true) {
    return getFunction(options);
  }
  return getMapSpecies();
}

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
