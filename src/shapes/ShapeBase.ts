import { Renderable } from "../bases";
import { CanvasBase } from "../canvas";

export abstract class ShapeBase<C extends CanvasBase = CanvasBase>
  implements Renderable<C>
{
  protected abstract _canvas: C;

  setCanvas(canvas: C): void {
    this._canvas = canvas;
  }

  getCanvas(): C {
    return this._canvas;
  }

  abstract render(): void;
}
