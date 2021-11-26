// // Method over-riding
// class class1 {
//     dis() {
//         console.log("This belongs to class1");
//     }
//     dip() {
//         console.log("This belongs to class1 - dip method");

//     }
// }
// class class2 extends class1 {
//     dis() {
//         // this.dip();
//         // super.dis(); //var x = super.dis()
//         // console.log(x);
//         console.log("This belongs to class2");
//     }
// }

// class class3 extends class2 {
//     dis() {
//         super.dis();
//         console.log("This belongs to class3");

//     }
// }
// var obj = new class3();
// obj.dis();

/***************************************************************************************************************/

//Method over-loading

class class1 {
    fun1(a: number, b: number): void;
    fun1(a: string, b: string): void;
    fun1(a: boolean, b: boolean): void;
    fun1(a: number, b: boolean): void;
    fun1(a: any, b: any): void {
        console.log(a + " " + b);

    }
}
var obj1 = new class1();
obj1.fun1(100, 100);
obj1.fun1("Hi", "Hi");
obj1.fun1(true, false);
obj1.fun1(100, true);
///obj1.fun1(true, 100);// its not possible..only defined data types can be given