import React, { useRef, useEffect } from "react";
import { DataSet, Network, Node, Edge } from "vis-network/standalone";
import { GraphFrame, NodeMarkerFrame } from "../../tracers/graph/GraphFrames";
import _ from "lodash";

type props = {
  frame: GraphFrame;
};

const GraphRenderer = ({ frame }: props) => {
  const graphEl = useRef<HTMLDivElement>(null);

  var nodes = new Array<Node>();
  var edges = new Array<Edge>();

  Array.from(frame.graphList).forEach(([nodeId, nodeEdges]) => {
    nodes.push({
      id: nodeId,
      label: String(nodeId),
      color: getNodeColor(frame.markers, nodeId),
    });
    nodeEdges.forEach((edge) => {
      if (!nodes.find(node => node.id === edge)) {
        edges.push({ from: nodeId, to: edge });
      }
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
        randomSeed: 666,
        improvedLayout: true,
      },
    };

    var network = new Network(container as HTMLDivElement, data, options);

    return () => network.destroy();
  });

  return <div style={{ width: "100%", height: "70vh" }} ref={graphEl}></div>;
};

const getNodeColor = (markers: Map<string, NodeMarkerFrame>, index: number): string | undefined => {
  // return the last applicable color for the node
  const appliedMarker = _.findLast(Array.from(markers.values()), (frame) => {
    return frame.selected[index] === 1;
  });

  return appliedMarker?.color;
};

export default GraphRenderer;
