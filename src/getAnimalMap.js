const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const objLoc = { NE: [], NW: [], SE: [], SW: [] };
const femaleNotSort = () => {
  Object.keys(objLoc).forEach((localization) => {
    objLoc[localization] = species.filter((specie) => specie.location === localization)
      .map(({ name, residents }) => {
        const femaleObj = {};
        const names = residents.filter((element) => element.sex === 'female')
          .map((animal) => animal.name);
        femaleObj[name] = names;
        return femaleObj;
      });
  });
};

const maleNotSort = () => {
  Object.keys(objLoc).forEach((localization) => {
    objLoc[localization] = species.filter((specie) => specie.location === localization)
      .map(({ name, residents }) => {
        const maleObj = {};
        const names = residents.filter((element) => element.sex === 'male')
          .map((animal) => animal.name);
        maleObj[name] = names;
        return maleObj;
      });
  });
};

const includeOptFemale = (opt) => {
  if (opt) {
    Object.keys(objLoc).forEach((localization) => {
      objLoc[localization] = species.filter((specie) => specie.location === localization)
        .map(({ name, residents }) => {
          const myObj = {};
          const names = residents.filter((element) => element.sex === 'female')
            .map((animal) => animal.name).sort();
          myObj[name] = names;
          return myObj;
        });
    });
  } else { femaleNotSort(); }
};

const includeOptMale = (opt) => {
  if (opt) {
    Object.keys(objLoc).forEach((localization) => {
      objLoc[localization] = species.filter((specie) => specie.location === localization)
        .map(({ name, residents }) => {
          const myObj = {};
          const names = residents.filter((element) => element.sex === 'male')
            .map((animal) => animal.name).sort();
          myObj[name] = names;
          return myObj;
        });
    });
  } else { maleNotSort(); }
};

const onlyNamesNoSort = () => {
  Object.keys(objLoc).forEach((localization) => {
    objLoc[localization] = species.filter((specie) => specie.location === localization)
      .map(({ name, residents }) => {
        const objNoSourced = {};
        const names = residents.map((animal) => animal.name);
        objNoSourced[name] = names;
        return objNoSourced;
      });
  });
};

const onlyNames = (opt) => {
  if (opt) {
    Object.keys(objLoc).forEach((localization) => {
      objLoc[localization] = species.filter((specie) => specie.location === localization)
        .map(({ name, residents }) => {
          const obj = {};
          const names = residents.map((animal) => animal.name);
          obj[name] = names.sort();
          return obj;
        });
    });
  } else { onlyNamesNoSort(); }
};

const includeTheNames = (opt) => {
  if (opt.includes('male')) {
    includeOptMale(opt[1]);
  } else if (opt.includes('female')) { includeOptFemale(opt[1]); } else {
    onlyNames(opt[1]);
  }
};

const byLocation = () => {
  Object.keys(objLoc).forEach((localization) => {
    objLoc[localization] = species.filter((specie) => specie.location === localization)
      .map(({ name }) => name);
  });
};

const callFunctions = ({ includeNames, sorted, sex }) => {
  if (includeNames) {
    includeTheNames([sex, sorted]);
  } else (byLocation());
  return objLoc;
};

function getAnimalMap(...options) {
  if (options.length === 0) {
    byLocation();
    return objLoc;
  }
  return callFunctions(options[0]);
}

module.exports = getAnimalMap;
