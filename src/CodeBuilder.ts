export const CodeBuilder = {
  build: async (code: string) => {
    const arrayModule = await import("./tracers/array/ArrayTracer");
    const graphModule = await import("./tracers/graph/GraphTracer");
    const myGraph = await import("./tracers/graph/Graph");
    const ArrayTracer = arrayModule.ArrayTracer;
    const GraphTracer = graphModule.GraphTracer;
    const Graph = myGraph.Graph;
    return eval(code);
  },
};
