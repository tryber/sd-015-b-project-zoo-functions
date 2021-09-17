const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsFromNE = () => species.filter((elemento) => elemento.location === 'NE');
const getAnimalsFromNW = () => species.filter((elemento) => elemento.location === 'NW');
const getAnimalsFromSE = () => species.filter((elemento) => elemento.location === 'SE');
const getAnimalsFromSW = () => species.filter((elemento) => elemento.location === 'SW');

const reduceToName = (arrayOfAnimalFrom) => arrayOfAnimalFrom.reduce((acc, elemento) =>
  acc.concat(elemento.name), []);

const defaultOrder = (residents, _) => residents.map((resident) => resident.name);

const sortOrder = (residents, _) => residents.sort((a, b) => {
  const value = (a.name > b.name) ? 1 : -1;
  return value;
}).map((resident) => resident.name);

const sexOrder = (residents, sex) => residents.filter((resident) => resident.sex === sex)
  .map((elemento) => elemento.name);

const sortAndSexOrder = (obj) => obj.map((elemento) => {
  const key = Object.keys(elemento);
  elemento[key].sort();
  return elemento;
});

const createObj = (obj, ordem, sex = undefined) => obj.map((elemento) => {
  const { residents } = elemento;
  const key = elemento.name;

  const residentNames = ordem(residents, sex);

  return { [key]: residentNames };
});

const getOne = (options) => {
  if (options.sorted) {
    return {
      NE: createObj(getAnimalsFromNE(), sortOrder),
      NW: createObj(getAnimalsFromNW(), sortOrder),
      SE: createObj(getAnimalsFromSE(), sortOrder),
      SW: createObj(getAnimalsFromSW(), sortOrder),
    };
  }
  return {
    NE: createObj(getAnimalsFromNE(), sexOrder, options.sex),
    NW: createObj(getAnimalsFromNW(), sexOrder, options.sex),
    SE: createObj(getAnimalsFromSE(), sexOrder, options.sex),
    SW: createObj(getAnimalsFromSW(), sexOrder, options.sex),
  };
};

const getSomething = (options) => {
  if (options.sorted && options.sex) {
    return {
      NE: sortAndSexOrder(createObj(getAnimalsFromNE(), sexOrder, options.sex)),
      NW: sortAndSexOrder(createObj(getAnimalsFromNW(), sexOrder, options.sex)),
      SE: sortAndSexOrder(createObj(getAnimalsFromSE(), sexOrder, options.sex)),
      SW: sortAndSexOrder(createObj(getAnimalsFromSW(), sexOrder, options.sex)),
    };
  }
  return getOne(options);
};

const verifyOptions = (options) => {
  let result;

  if (options.sex || options.sorted) {
    result = getSomething(options);
  } else {
    result = {
      NE: createObj(getAnimalsFromNE(), defaultOrder),
      NW: createObj(getAnimalsFromNW(), defaultOrder),
      SE: createObj(getAnimalsFromSE(), defaultOrder),
      SW: createObj(getAnimalsFromSW(), defaultOrder),
    };
  }

  return result;
};

function getAnimalMap(options) {
  let result;

  result = {
    NE: reduceToName(getAnimalsFromNE()),
    NW: reduceToName(getAnimalsFromNW()),
    SE: reduceToName(getAnimalsFromSE()),
    SW: reduceToName(getAnimalsFromSW()),
  };

  if (options && options.includeNames) {
    result = verifyOptions(options);
  }

  return result;
}

module.exports = getAnimalMap;
