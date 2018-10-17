// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const initalTime = Date.now();
  return new Promise((resolve) => {
    setInterval(() => resolve(Date.now() - initalTime), time);
  });
}

export function asyncDelay() {

}
