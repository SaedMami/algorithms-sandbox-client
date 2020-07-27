import { Graph } from "./Graph";
import { GraphFrame } from "./GraphFrames";

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
