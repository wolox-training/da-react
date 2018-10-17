import isArray from './utils';

function hasNestedArray(array) {
  return isArray(array[0]);
}

function isEmpty(array) {
  return array.length === 0;
}

export function min(...array) {
  if (!isEmpty(array)) {
    if (hasNestedArray(array)) {
      return Math.min(...array[0]);
    }

    return Math.min(...array);
  }

  return undefined;
}

export function copy(arg) {
  if (isArray(arg)) {
    const copiedArray = [];
    arg.forEach(elem => {
      copiedArray.push(elem);
    });
    return copiedArray;
  }

  const props = Object.keys(arg);
  const copiedObj = {};
  props.forEach(prop => {
    copiedObj[prop] = arg[prop];
  });
  return copiedObj;
}
