export interface ArrayPointerFrame {
  position: number;
}

export interface ArrayMarkerFrame {
  color: string;
  selected: Array<number>;
}

export interface ArrayFrame {
  data: Array<number>;
  pointers: Map<string, ArrayPointerFrame>;
  markers: Map<string, ArrayMarkerFrame>;
}
