// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const initalTime = Date.now();
  return new Promise((resolve, reject) => {
    if (time > 500) reject(new Error('This time is too much !'));
    setInterval(() => resolve(Date.now() - initalTime), time);
  });
}

export function asyncDelay(time) {
  return delay(time);
}
