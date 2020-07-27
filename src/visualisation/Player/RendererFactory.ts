import ArrayRenderer from "../Renderers/ArrayRenderer";
import GraphRenderer from "../Renderers/GraphRenderer";

export const makeRenderer = (rendererType: string) => {
  switch (rendererType) {
    case "array":
      return ArrayRenderer;
    case "graph":
      return GraphRenderer;

    default:
      throw new Error("Unkown renderer type");
  }
};
