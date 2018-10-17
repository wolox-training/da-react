import isArray from './utils';

export const min = (...args) => (isArray(args[0]) ? Math.min(...args[0]) : Math.min(...args));

export function copy() {

}
