var class_1 = /** @class */ (function () {
    function class_1(a1, b1, c1) {
        this.a1 = a1;
        this.b1 = b1;
        this.c1 = c1;
    }
    return class_1;
}());
var obj1 = new class_1({ key1: "Hello1" }, { key2: "Hello2" }, { key3: "Hello3" });
console.log(obj1.a1.key1, obj1.b1.key2, obj1.c1.key3);
