import ArrayRenderer from "../Renderers/ArrayRenderer";
import GraphRenderer from "../Renderers/GraphRenderer";
import { ArrayFrame } from "../../tracers/array/ArrayFrames";
import { GraphFrame } from "../../tracers/graph/GraphFrames";

export const makeRenderer = (rendererType: string, frame: any) => {
  switch (rendererType) {
    case "array":
      return ArrayRenderer({ frame: frame as ArrayFrame });
    case "graph":
      return GraphRenderer({ frame: frame as GraphFrame });

    default:
      throw new Error("Unkown renderer type");
  }
};
