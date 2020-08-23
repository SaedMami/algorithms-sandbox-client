export type ArrayPointerFrame = {
  position: number;
};

export type ArrayMarkerFrame = {
  color: string;
  selected: Array<number>;
};

export class ArrayFrame  {
  constructor(data: Array<number>) {
    this.data = data;
  }
  
  data: Array<number>;
  pointers: Map<string, ArrayPointerFrame> = new Map();
  markers: Map<string, ArrayMarkerFrame> = new Map();
};
