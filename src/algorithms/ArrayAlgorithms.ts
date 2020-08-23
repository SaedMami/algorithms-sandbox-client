export const bubbleSort = `
function swap(array, i, j) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

(function main() {
  let data = [4, 9, 7, 23, 9, 37, 49, 2, 0, 11];
  const tracer = new ArrayTracer(data, "array");
  const current = tracer.createMarkerTracer("current", "#8594c9");
  const sorted = tracer.createMarkerTracer("sorted", "#9c9594");
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
})();
`;

export const selectionSort = `
function swap(array, i, j) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

(function main() {
  let data = [4, 9, 7, 23, 9, 37, 49, 2, 0, 11];
  const tracer = new ArrayTracer(data, "array");
  const current = tracer.createMarkerTracer("current", "#8594c9");
  const minMarker = tracer.createMarkerTracer("min", "red");
  const sorted = tracer.createMarkerTracer("sorted", "grey");
  const currentPointer = tracer.createPointer("i");
  tracer.capture();
  for (let i = 0; i < data.length - 1; ++i) {
    current.mark(i);
    currentPointer.point(i);
    tracer.capture();
    let min = i;
    for (let j = i + 1; j < data.length; ++j) {
      current.mark(j);
      tracer.capture();
      if (data[j] < data[min]) {
        minMarker.unmark(min);
        min = j;
        minMarker.mark(min);
      }
      current.unmark(j);
      tracer.capture();
    }
    swap(data, i, min);
    minMarker.unmark(min);
    tracer.capture();
    current.unmark(i);
    sorted.mark(i);
    tracer.capture();
  }
  sorted.mark(data.length - 1);
  tracer.clearPointer("i");
  tracer.capture();
  return tracer;  
})();
`;

export const quickSort = `
function swap(array, i, j) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

(function main() {
  const quickSortInternal = (start, end) => {
    if (start >= end) {
      return;
    }
    let pivotIndex = end - 1;
    let i = start;
    let j = pivotIndex - 1;

    pivotMarker.mark(pivotIndex);
    iPointer.point(i);
    jPointer.point(j);
    current.mark(i);
    current.mark(j);
    tracer.capture();

    while (i <= j) {
      if (data[i] < data[pivotIndex]) {
        current.unmark(i);
        ++i;
        current.mark(i);
        iPointer.point(i);
        tracer.capture();
      } else {
        current.unmark(j);
        --j;
        current.mark(j);
        jPointer.point(j);
        tracer.capture();
        swap(data, i, j + 1);
        tracer.capture();
      }
    }
    
    current.unmark(i);
    current.unmark(j);
    tracer.capture();
    swap(data, pivotIndex, j + 1);
    pivotMarker.unmark(pivotIndex);
    pivotIndex = j + 1;
    pivotMarker.mark(pivotIndex);
    tracer.capture();

    pivotMarker.unmark(pivotIndex);
    doneMarker.mark(pivotIndex);
    iPointer.point(-1);
    jPointer.point(-1);
    tracer.capture();

    quickSortInternal(start, pivotIndex, data, tracer);
    quickSortInternal(pivotIndex + 1, end, data, tracer);
  };  
  
  let data = [4, 9, 7, 23, 9, 37, 49, 2, 0, 11];
  const tracer = new ArrayTracer(data, "array");
  tracer.capture();
  const current = tracer.createMarkerTracer("current", "#8594c9");
  const pivotMarker = tracer.createMarkerTracer("pivot", "red");
  const doneMarker = tracer.createMarkerTracer("done", "green");
  const iPointer = tracer.createPointer("i");
  const jPointer = tracer.createPointer("j");
  quickSortInternal(0, data.length, data, tracer);
  return tracer;
})();
`;
