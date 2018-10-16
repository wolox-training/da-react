import isArray from './utils';

export function min(...args) {
  if (isArray(args)) {
    if (args.length > 1) {
      return Math.min(args);
    }
  }
  return args[0];
}

export function copy() {

}
