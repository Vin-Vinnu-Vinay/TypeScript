class class_1 {
    private a: string;
    private b: string;
    constructor(a1: string, b1: string = "a good boy") {
        this.a = a1;
        this.b = b1
        console.log("You know");

    }
    public describe(): void {
        console.log(this.a + this.b);
    }
}
var obj: class_1 = new class_1("Vinay is ");
obj.describe();