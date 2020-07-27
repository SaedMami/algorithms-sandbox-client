export interface Tracer {
  getRendererType(): string;

  getFrames(): Array<any>;

  capture(): void;
}
