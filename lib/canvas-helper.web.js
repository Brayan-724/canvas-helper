var CanvasBase = function(a1) {
    "use strict";
    this.canvas = a1, this.ctx = a1.getContext("2d");
};
var ObjectBase = function() {};
var a = function() {
    "use strict";
    var ShapeBase1 = function() {}, a2 = ShapeBase1.prototype;
    return a2.setCanvas = function(a3) {
        this._canvas = a3;
    }, a2.getCanvas = function() {
        return this._canvas;
    }, ShapeBase1;
}();
export { CanvasBase as CanvasBase, ObjectBase as ObjectBase, a as ShapeBase };
