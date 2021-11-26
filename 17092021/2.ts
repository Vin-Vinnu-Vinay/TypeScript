var g: number = 1;
class Num {
    static sv: Number = 2;
    iv: Number = 3;
    display(iv: number): void {
        var i: number = 4;
        console.log('Local            : ' + i);
        console.log('Instance variable: ' + this.iv);
        console.log('Static variable  : ' + Num.sv);
        console.log('Global variable  : ' + g);
        console.log('Argument variable: ' + iv);
    }
}
var obj = new Num();
obj.display(5);