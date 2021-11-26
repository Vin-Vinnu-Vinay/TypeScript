class class1 {
    public e: number = 0;
    protected d: number = 1;
    private static c: number = 5;
    protected constructor(private a: number) {
        console.log(this.a + class1.c);

    }
}

class class2 extends class1 {
    constructor(a: number) {
        super(a)
    }
}
let obj = new class2(10)
console.log(this.d);
console.log(this.e);


// class1.c - is not possible
// obj = new class1() - is not possible