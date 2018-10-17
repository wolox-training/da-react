import isArray from './utils';

export const min = args => (isArray(args) ? Math.min(...args) : args);

export function copy() {

}
