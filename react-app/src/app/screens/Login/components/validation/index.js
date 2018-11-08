export const required = value => (value ? undefined : 'Value is required');

export const passLength = value => (value.length < 8 ? 'Needs at least 8 characters' : undefined);

export function checkEmail(value) {
  const str = String(value).toLowerCase();
  const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return re.test(str) ? undefined : 'Invalidad email';
}
