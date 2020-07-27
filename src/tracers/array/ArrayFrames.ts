export type ArrayPointerFrame = {
  position: number;
};

export type ArrayMarkerFrame = {
  color: string;
  selected: Array<number>;
};

export type ArrayFrame = {
  data: Array<number>;
  pointers: Map<string, ArrayPointerFrame>;
  markers: Map<string, ArrayMarkerFrame>;
};
