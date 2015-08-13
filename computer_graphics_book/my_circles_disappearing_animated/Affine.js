/**
 * Represents a 2d transformation matrix column major orientation:
 *
 *   a  b  0
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
var AffineTransformation = function(){
    this.a = 1 ;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.e = 0;
    this.f = 0;
};

AffineTransformation.prototype.getMat3 = function() {
    return [
        this.a, this.b, 0,
        this.c, this.d, 0,
        this.e, this.f, 0
    ];
};

AffineTransformation.prototype.translate = function(dx, dy) {
    this.e += dx;
    this.f += dy;
};

AffineTransformation.prototype.scale = function(scaleFactor) {
    this.a *= scaleFactor;
    this.b *= scaleFactor;
    this.c *= scaleFactor;
    this.d *= scaleFactor;
};