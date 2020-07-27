export function generateRandomArray(
  length: number,
  max: number
): Array<number> {
  return Array.from({ length: length }, () => Math.floor(Math.random() * max));
}

export const id = (() => {
  let currentId = 0;
  const map = new WeakMap();

  return (object: object) => {
    if (!map.has(object)) {
      map.set(object, ++currentId);
    }

    return map.get(object);
  };
})();
