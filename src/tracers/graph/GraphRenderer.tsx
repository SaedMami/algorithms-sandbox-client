import React, { useRef, useEffect } from "react";
import { DataSet, Network } from "vis-network/standalone";
import { GraphFrame } from "./GraphTracer";

const GraphRenderer = (props: GraphFrame) => {
  const graphEl = useRef<HTMLDivElement>(null);

  var nodes = new Array<Object>();
  var edges = new Array<Object>();

  Array.from(props.graph).forEach(([nodeId, nodeEdges]) => {
    nodes.push({ id: nodeId, label: String(nodeId) });
    nodeEdges.forEach((edge, index) => {
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

export default GraphRenderer;