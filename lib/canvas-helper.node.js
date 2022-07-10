var CanvasBase = function(a) {
    "use strict";
    this.canvas = a, this.ctx = a.getContext("2d");
};
export { CanvasBase as CanvasBase };
var ObjectBase = function() {};
export { ObjectBase as ObjectBase };
var ShapeBase = function() {
    "use strict";
    function ShapeBase1() {}
    var a1 = ShapeBase1.prototype;
    return a1.setCanvas = function(a) {
        this._canvas = a;
    }, a1.getCanvas = function() {
        return this._canvas;
    }, ShapeBase1;
}();
export { ShapeBase as ShapeBase };
