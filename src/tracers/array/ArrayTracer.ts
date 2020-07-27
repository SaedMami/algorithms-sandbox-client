import { ArrayFrame, ArrayPointerFrame, ArrayMarkerFrame } from "./ArrayFrames";

import _ from "lodash";
import { Tracer } from "../Tracer";

export class ArrayTracer implements Tracer {
  private frames = new Array<ArrayFrame>();
  private data: Array<number>;
  private rendererType: string;
  private currentPointers = new Map<string, ArrayPointerFrame>();
  private currentMarkers = new Map<string, ArrayMarkerFrame>();

  constructor(data: Array<number>, renderer: string) {
    this.data = data;
    this.rendererType = renderer;
  }

  getRendererType() {
    return this.rendererType;
  }

  getFrames() {
    return this.frames;
  }

  capture() {
    this.frames.push({
      data: [...this.data],
      pointers: _.cloneDeep(this.currentPointers),
      markers: _.cloneDeep(this.currentMarkers),
    });
  }

  createMarkerTracer(key: string, color: string) {
    const frame: ArrayMarkerFrame = {
      color: color,
      selected: new Array<number>(this.data.length).fill(0),
    };
    this.currentMarkers.set(key, frame);
    return new ArrayMarker(frame);
  }

  createPointer(key: string) {
    const frame: ArrayPointerFrame = { position: -1 };
    this.currentPointers.set(key, frame);
    return new ArrayPointer(frame);
  }

  clearPointer(key: string) {
    this.currentPointers.delete(key);
  }
}

export class ArrayMarker {
  private frame: ArrayMarkerFrame;

  constructor(frame: ArrayMarkerFrame) {
    this.frame = frame;
  }

  mark(position: number) {
    this.frame.selected[position] = 1;
  }

  unmark(position: number) {
    this.frame.selected[position] = 0;
  }
}

export class ArrayPointer {
  private frame: ArrayPointerFrame;

  constructor(frame: ArrayPointerFrame) {
    this.frame = frame;
  }

  point(position: number) {
    this.frame.position = position;
  }
}
