import _ from "lodash";

export class ArrayPointerFrame {
  constructor() {
    this.position = -1;
  }
  position: number;
}

export class ArrayMarkerFrame {
  constructor(color: string, length: number) {
    this.color = color;
    this.selected = new Array<number>(length).fill(0);
  }
  color: string;
  selected: Array<number>;
}

export class ArrayFrame {
  constructor(data: Array<number>) {
    this.data = data;
    this.pointers = new Map<string, ArrayPointerFrame>();
    this.markers = new Map<string, ArrayMarkerFrame>();
  }

  public static copyOf(frame: ArrayFrame) {
    return {
      data: [...frame.data],
      pointers: _.cloneDeep(frame.pointers),
      markers: _.cloneDeep(frame.markers),
    };
  }

  data: Array<number>;
  pointers: Map<string, ArrayPointerFrame> = new Map();
  markers: Map<string, ArrayMarkerFrame> = new Map();
}
