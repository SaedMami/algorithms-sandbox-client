import React, { useRef, useEffect } from "react";
import { DataSet, Network } from "vis-network/standalone";
import { GraphFrame, NodeMarkerFrame } from "../../tracers/graph/GraphFrames";

type props = {
  frame: GraphFrame;
};

const GraphRenderer = ({ frame }: props) => {
  const graphEl = useRef<HTMLDivElement>(null);

  var nodes = new Array<Object>();
  var edges = new Array<Object>();

  Array.from(frame.graphList).forEach(([nodeId, nodeEdges]) => {
    nodes.push({
      id: nodeId,
      label: String(nodeId),
      color: getNodeColor(frame.markers, nodeId),
    });
    nodeEdges.forEach((edge) => {
      edges.push({ from: nodeId, to: edge });
    });
  });

  useEffect(() => {
    // create a network
    const container = graphEl.current;
    var data = {
      nodes: new DataSet(nodes),
      edges: new DataSet(edges),
    };
    // these are all options in full.
    var options = {
      height: "100%",
      width: "100%",
      edges: {
        color: {
          inherit: false,
        },
      },
      layout: {
        randomSeed: 123,
        improvedLayout: true,
        hierarchical: {
          direction: "LR", // UD, DU, LR, RL
          sortMethod: "directed", // hubsize, directed
        },
      },
    };

    var network = new Network(container as HTMLDivElement, data, options);

    return () => network.destroy();
  });

  return <div style={{ width: "100%", height: "70vh" }} ref={graphEl}></div>;
};

const getNodeColor = (markers: Map<string, NodeMarkerFrame>, index: number) => {
  // return the first applicable color for the node
  const it = markers.values();
  let marker = it.next();
  while (!marker.done) {
    if (marker.value.selected[index] === 1) {
      return marker.value.color;
    }
    marker = it.next();
  }

  // no marker found for this element
  return null;
};

export default GraphRenderer;
