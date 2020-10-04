import { AnimationCommand } from './../api/AnimationCommand';
export interface Tracer {
  capture(): void;
  animationCommand() : AnimationCommand;
}
