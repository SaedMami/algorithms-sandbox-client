export const CodeBuilder = {
  build: async (code: string) => {
    const module = await import("./arch/array/ArrayTracer");
    const ArrayTracer = module.ArrayTracer;
    return eval(code);
  },
};
