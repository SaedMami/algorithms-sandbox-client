import { AnimationCommand } from './../../api/AnimationCommand';
import { GraphFrame, NodeMarkerFrame } from "./GraphFrames";

export class GraphTracer {
  private frames = new Array<GraphFrame>();
  private referenceFrame: GraphFrame;

  constructor(graphList: Map<number, Array<number>>) {
    this.referenceFrame = new GraphFrame(graphList);
    this.capture();
  }

  capture() {
    this.frames.push(GraphFrame.copyOf(this.referenceFrame));
  }

  animationCommand(): AnimationCommand {
    return {
      rendererType: "graph",
      frames: this.frames,
    }
  }

  createNodeMarkerControl(key: string, color: string) {
    const frame = new NodeMarkerFrame(
      color,
      this.referenceFrame.graphList.size
    );
    this.referenceFrame.markers.set(key, frame);
    return new NodeMarkerControl(frame);
  }
}

export class NodeMarkerControl {
  private frame: NodeMarkerFrame;

  constructor(frame: NodeMarkerFrame) {
    this.frame = frame;
  }

  mark(position: number) {
    this.frame.selected[position] = 1;
  }

  unmark(position: number) {
    this.frame.selected[position] = 0;
  }
}
