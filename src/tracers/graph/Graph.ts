export class Graph {
  private adjacencyList = new Map<number, Array<number>>();

  constructor(nodeCount: number, edges: Array<[number, number]>) {
    Array.from(Array(nodeCount).keys()).forEach((number) =>
      this.adjacencyList.set(number, [])
    );
    edges.forEach((edge) => {
      this.addEdge(edge[0], edge[1]);
    });
  }

  public addEdge(from: number, to: number) {
    let v = this.adjacencyList.get(from);
    v?.push(to);
  }

  public getAdjacencyList() {
    return this.adjacencyList;
  }
}
