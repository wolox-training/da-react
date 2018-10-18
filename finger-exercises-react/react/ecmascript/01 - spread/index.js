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

export function copy(param) {
  if (isArray(param)) {
    return [...param];
  }
  return { ...param };
}

export function reverseMerge(...arrays) {
  const newArray = [];
  arrays.forEach(array => {
    newArray.unshift(...array);
  });
  return newArray;
}

export function filterAttribs({ a, b, ...arg } = {}) {
  return arg;
}
