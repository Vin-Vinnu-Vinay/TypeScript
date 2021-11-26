class class_1 {
    constructor(public a1: any, public b1: any, public c1: any) { }
}
let obj1: class_1 = new class_1({ key1: "Hello1" }, { key2: "Hello2" }, { key3: "Hello3" })
console.log(obj1.a1.key1, obj1.b1.key2, obj1.c1.key3);
