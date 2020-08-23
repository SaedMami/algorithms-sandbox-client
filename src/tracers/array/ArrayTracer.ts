import { ArrayFrame, ArrayPointerFrame, ArrayMarkerFrame } from "./ArrayFrames";

import _ from "lodash";
import { Tracer } from "../Tracer";

export class ArrayTracer implements Tracer {
  private frames = new Array<ArrayFrame>();
  private currentFrame: ArrayFrame;
  private rendererType: string;

  constructor(data: Array<number>, renderer: string) {
    this.currentFrame = new ArrayFrame(data);
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
      data: [...this.currentFrame.data],
      pointers: _.cloneDeep(this.currentFrame.pointers),
      markers: _.cloneDeep(this.currentFrame.markers)
    });
  }

  createMarkerTracer(key: string, color: string) {
    const frame: ArrayMarkerFrame = {
      color: color,
      selected: new Array<number>(this.currentFrame.data.length).fill(0),
    };
    this.currentFrame.markers.set(key, frame);
    return new ArrayMarker(frame);
  }

  createPointer(key: string) {
    const frame: ArrayPointerFrame = { position: -1 };
    this.currentFrame.pointers.set(key, frame);
    return new ArrayPointer(frame);
  }

  clearPointer(key: string) {
    this.currentFrame.pointers.delete(key);
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
