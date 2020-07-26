import { Frame } from "../Frame";

export type ArrayPointerFrame = {
  position: number;
};

export type ArrayMarkerFrame = {
  color: string;
  selected: Array<number>;
};

export type ArrayFrame = Frame & {
  data: Array<number>;
  pointers: Map<string, ArrayPointerFrame>;
  markers: Map<string, ArrayMarkerFrame>;
};
