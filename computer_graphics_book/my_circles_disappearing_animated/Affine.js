/**
 * Represents a 2d transformation matrix in column major orientation:
 *
 C*   a  b  0
 *   c  d  0
 *   e  f  1
 *
 * The equivalent row major orientation would be:
 *
 *   a  c  e
 *   b  d  f
 *   0  0  1
 *
 * This represents a transformation of the coordinates (x, y) to
 * ( a*x + c*y + e, b*x + d*y + e )
 */
var Circle = function (color) {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.e = 0;
    this.f = 0;

    this.color = color;
    this.erased = false;
};

Circle.prototype.getMat3 = function () {
    return [
        this.a, this.b, 0,
        this.c, this.d, 0,
        this.e, this.f, 0
    ];
};

Circle.prototype.isErased = function () {
    return this.erased;
};

Circle.prototype.getColor = function () {
    return this.color;
};

Circle.prototype.translate = function (dx, dy) {
    this.e += dx;
    this.f += dy;
};


Circle.prototype.scale = function (scaleFactor) {
    this.a *= scaleFactor;
    this.b *= scaleFactor;
    this.c *= scaleFactor;
    this.d *= scaleFactor;
};

Circle.prototype.getScaleFactor = function () {
    return this.a;
};

Circle.prototype.getCenterX = function () {
    return this.e
};

Circle.prototype.getCenterY = function () {
    return this.f;
};

