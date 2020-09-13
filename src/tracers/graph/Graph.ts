export class Graph {
  adjacencyList = new Map<number, Array<number>>();

  constructor(nodeCount: number) {
    Array.from(Array(nodeCount).keys()).forEach((number) =>
      this.adjacencyList.set(number, [])
    );
  }

  public static copyOf(other: Graph): Graph {
    const adjacencyListCopy = new Map<number, Array<number>>();

    other.adjacencyList.forEach((edges, index) => {
      adjacencyListCopy.set(index, [...edges]);
    });

    const graphCopy = new Graph(other.count());
    graphCopy.adjacencyList = adjacencyListCopy;
    return graphCopy;
  }

  public addEdges(edges: [[number, number]]) {
    edges.forEach(([from, to]) => {
      this.addEdge(from, to);
      this.addEdge(to, from);
    });
  }

  public addEdge(from:number, to:number) {
    this.adjacencyList.get(from)?.push(to);
  }

  public count(): number {
    return this.adjacencyList.size;
  }
}
