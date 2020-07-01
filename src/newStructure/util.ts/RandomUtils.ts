export function generateRandomArray(
  length: number,
  max: number
): Array<number> {
  return Array.from({ length: length }, () => Math.floor(Math.random() * max));
}
