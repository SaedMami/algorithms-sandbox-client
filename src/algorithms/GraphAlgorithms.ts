export const DFS = `
// A function that returns a tracer object
(function main() {
  let graph = new Graph(10);
  graph.addEdges([
    [0, 2],
    [0, 1],
    [0, 4],
    [2, 1],
    [4, 5],
    [5, 3],
    [3, 8],
    [3, 6],
    [8, 9],
    [2, 7]
  ]);

  const tracer = new GraphTracer(graph.adjacencyList);

  const visitedMarker = tracer.createNodeMarkerControl("visited", "red");
  const currentMarker = tracer.createNodeMarkerControl("current", "green");

  const visited = new Array(10).fill(false);
  const stack = [];

  stack.push(3);
  visit(3);

  while (stack.length !== 0) {
    var current = stack.pop();
    currentMarker.mark(current);
    tracer.capture();

    var edges = graph.adjacencyList.get(current);
    
    edges.forEach( e => {
      if (! visited[e]) {
        stack.push(e);
        visit(e);
        tracer.capture();
      }
    });

    currentMarker.unmark(current);
    tracer.capture();

  }

  function visit(index) {
    visited[index] = true;
    visitedMarker.mark(index);
  }

  return tracer.animationCommand();
})();
`; 