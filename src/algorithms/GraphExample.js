// A function that returns a tracer object
(function main() {
  // eslint-disable-next-line no-undef
  let graph = new Graph(6);
  graph.addEdges([
    [0, 2],
    [0, 4],
    [1, 0],
    [2, 1],
    [4, 5],
    [5, 3],
  ]);

  // eslint-disable-next-line no-undef
  const tracer = new GraphTracer(graph.adjacencyList);

  const marker = tracer.createNodeMarkerControl("m1", "red");
  marker.mark(0);

  tracer.capture();

  return tracer;
})();
