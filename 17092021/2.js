var g = 1;
var Num = /** @class */ (function () {
    function Num() {
        this.iv = 3;
    }
    Num.prototype.display = function (iv) {
        var i = 4;
        console.log('Local            : ' + i);
        console.log('Instance variable: ' + this.iv);
        console.log('Static variable  : ' + Num.sv);
        console.log('Global variable  : ' + g);
        console.log('Argument variable: ' + iv);
    };
    Num.sv = 2;
    return Num;
}());
var obj = new Num();
obj.display(5);
