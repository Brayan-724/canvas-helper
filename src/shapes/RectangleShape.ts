import { ShapeBase } from "./ShapeBase";
import { CanvasBase } from "../canvas"

export class RectangleShape extends ShapeBase {
  protected _canvas!: CanvasBase;

  render() {
    console.log("Rectangle Rendered!")
  }
}
