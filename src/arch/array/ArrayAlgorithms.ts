import { ArrayTracer } from "./ArrayTracer";

export const bubbleSort = (toSort: Array<number>): ArrayTracer => {
  let data = [...toSort];
  const tracer = new ArrayTracer(data, "dummy");
  const current = tracer.createMarkerTracer("current", "red");
  const sorted = tracer.createMarkerTracer("sorted", "pink");
  tracer.capture();

  for (let i = 0; i < data.length; ++i) {
    for (let j = 0; j < data.length - 1 - i; ++j) {
      current.mark(j);
      current.mark(j + 1);
      tracer.capture();
      if (data[j] > data[j + 1]) {
        swap(data, j, j + 1);
        tracer.capture();
      }
      current.unmark(j);
      tracer.capture();
    }

    current.unmark(data.length - i - 1);
    sorted.mark(data.length - i - 1);
    tracer.capture();
  }
  return tracer;
};

// export const selectionSort: ArrayAlgorithm = async (data, manipulator) => {
//   for (let i = 0; i < data.length - 1; ++i) {
//     manipulator.select(i);
//     await sleep();
//     let min = i;
//     for (let j = i + 1; j < data.length; ++j) {
//       manipulator.select(j);
//       await sleep();
//       if (data[j] < data[min]) {
//         min = j;
//       }
//       manipulator.deselect(j);
//     }
//     swap(data, i, min);
//     manipulator.deselect(i);
//     manipulator.mark(i);
//     await sleep();
//   }
//   manipulator.mark(data.length - 1);
// };

// export const quickSort: ArrayAlgorithm = async (data, manipulator) => {
//   await quickSortInternal(0, data.length, data, manipulator);
// };

// async function quickSortInternal(
//   start: number,
//   end: number,
//   data: Array<any>,
//   manipulator: ArrayManipulator
// ) {
//   if (start >= end) {
//     return;
//   }
//   let pivotIndex = end - 1;
//   let i = start;
//   let j = pivotIndex - 1;

//   await manipulator.mark(pivotIndex);
//   await manipulator.select(i);
//   await manipulator.select(j);
//   await sleep();

//   while (i <= j) {
//     if (data[i] < data[pivotIndex]) {
//       await manipulator.deselect(i);
//       ++i;
//       await manipulator.select(i);
//       await sleep();
//     } else {
//       await manipulator.deselect(j);
//       --j;
//       await manipulator.select(j);
//       await sleep();
//       swap(data, i, j + 1);
//       await manipulator.update(data);
//       await sleep();
//     }
//   }
//   await manipulator.deselect(i);
//   await manipulator.deselect(j);
//   await sleep();
//   swap(data, pivotIndex, j + 1);
//   await sleep();
//   await manipulator.unmark(pivotIndex);
//   pivotIndex = j + 1;
//   await manipulator.mark(pivotIndex);

//   quickSortInternal(start, pivotIndex, data, manipulator);
//   quickSortInternal(pivotIndex + 1, end, data, manipulator);
// }

function swap(array: Array<any>, i: number, j: number) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
