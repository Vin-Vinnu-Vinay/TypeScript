var class_1 = /** @class */ (function () {
    function class_1(a1, b1) {
        if (b1 === void 0) { b1 = "a good boy"; }
        this.a = a1;
        this.b = b1;
        console.log("You know");
    }
    class_1.prototype.describe = function () {
        console.log(this.a + this.b);
    };
    return class_1;
}());
var obj = new class_1("Vinay is ");
obj.describe();
