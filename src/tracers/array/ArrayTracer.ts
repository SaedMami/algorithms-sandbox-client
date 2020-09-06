import { ArrayFrame, ArrayPointerFrame, ArrayMarkerFrame } from "./ArrayFrames";

import { Tracer } from "../Tracer";

export class ArrayTracer implements Tracer {
  private frames = new Array<ArrayFrame>();
  private referenceFrame: ArrayFrame;
  private rendererType: string;

  constructor(data: Array<number>, renderer: string) {
    this.referenceFrame = new ArrayFrame(data);
    this.rendererType = renderer;
    this.capture();
  }

  getRendererType() {
    return this.rendererType;
  }

  getFrames() {
    return this.frames;
  }

  capture() {
    this.frames.push(ArrayFrame.copyOf(this.referenceFrame));
  }

  createMarkerControl(key: string, color: string) {
    const frame = new ArrayMarkerFrame(color, this.referenceFrame.data.length);
    this.referenceFrame.markers.set(key, frame);
    return new ArrayMarkerControl(frame);
  }

  createPointerControl(key: string) {
    const frame = new ArrayPointerFrame();
    this.referenceFrame.pointers.set(key, frame);
    return new ArrayPointerControl(frame);
  }

  clearPointer(key: string) {
    this.referenceFrame.pointers.delete(key);
  }
}

export class ArrayMarkerControl {
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

export class ArrayPointerControl {
  private frame: ArrayPointerFrame;

  constructor(frame: ArrayPointerFrame) {
    this.frame = frame;
  }

  point(position: number) {
    this.frame.position = position;
  }
}
