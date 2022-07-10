import { CanvasBase } from "../canvas";

export interface Renderable<C extends CanvasBase = CanvasBase> {
  setCanvas(canvas: CanvasBase): void;
  getCanvas(): void;
  render(): void;
}
