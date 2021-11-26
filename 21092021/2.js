var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank() {
        this.s = 100;
    }
    Bank.prototype.display = function () {
        console.log("display info");
    };
    return Bank;
}());
var ICICI = /** @class */ (function (_super) {
    __extends(ICICI, _super);
    function ICICI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ICICI.prototype.getRate = function () {
        console.log(7);
    };
    return ICICI;
}(Bank));
var AXIS = /** @class */ (function (_super) {
    __extends(AXIS, _super);
    function AXIS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AXIS.prototype.getRate = function () {
        console.log(77);
    };
    return AXIS;
}(Bank));
var demo = new AXIS();
demo.display();
demo.getRate();
