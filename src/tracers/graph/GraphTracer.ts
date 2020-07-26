import { Graph } from "./Graph";
import { Frame } from "../Frame";

export type GraphFrame = Frame & {
  graph: [number, number[]][];
  //visited: Array<boolean>;
};

export type NodeMarkerFrame = {
  //color: string;
  //selected: Array<number>;
};

export class GraphTracer {
  private graph: Graph;
  private frames = new Array<GraphFrame>();

  constructor(graph: Graph) {
    this.graph = graph;
    this.capture();
  }

  capture() {
    this.frames.push({
      graph: this.copyGraphFrame(this.graph.getAdjacencyList()),
    });
  }

  getFrames() {
    return this.frames;
  }

  getRendererType() {
    return "graph";
  }

  private copyGraphFrame(graph: Map<number, number[]>) {
    const copied: [number, number[]][] = [];
    graph.forEach((edges, index) => {
      copied.push([index, [...edges]]);
    });

    return copied;
  }
}
