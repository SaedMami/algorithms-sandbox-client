import _ from "lodash";

export class GraphFrame {
  constructor(graphList: Map<number, number[]>) {
    this.graphList = graphList;
    this.markers = new Map<string, NodeMarkerFrame>();
  }

  public static copyOf(other: GraphFrame): GraphFrame {
    const newFrame = new GraphFrame(_.cloneDeep(other.graphList));
    newFrame.markers = _.cloneDeep(other.markers);
    return newFrame;
  }

  graphList: Map<number, number[]>;
  markers: Map<string, NodeMarkerFrame>;
}

export class NodeMarkerFrame {
  color: string;
  selected: Array<number>;

  constructor(color: string, length: number) {
    this.color = color;
    this.selected = new Array<number>(length).fill(0);
  }
}
