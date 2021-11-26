abstract class Bank {
    abstract getRate(): void;
    s: number = 100;
    display() {
        console.log("display info");
    }
}

class ICICI extends Bank {
    getRate(): void {
        console.log(7);
    }
}

class AXIS extends Bank {
    getRate(): void {
        console.log(77);
    }
}

let demo = new AXIS();
demo.display();
demo.getRate();