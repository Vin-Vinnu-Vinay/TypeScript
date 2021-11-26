abstract class RoyalEnfield {
  abstract model: string;
  abstract cc: string;
  abstract mileage: string;
  abstract describeBike(): void;
}

class Standard extends RoyalEnfield {
  model: string = "Standard";
  cc: string = "350";
  mileage: string = "40-45km";
  describeBike(): void {
    let dis = `Royal Enfield's first model is ${this.model} has a cc of ${this.cc} and gives a better mileage of about ${this.mileage}`;
    console.log(dis);
  }
}

class Classic extends RoyalEnfield {
  model: string = "Classic";
  cc: string = "350";
  mileage: string = "35-40km";
  describeBike(): void {
    let dis = `Royal Enfield's next model is ${this.model} has a cc of ${this.cc} and gives a mileage of about ${this.mileage}`;
    console.log(dis);
  }
}

let obj1 = new Standard();
let obj2 = new Classic();
obj1.describeBike();
obj2.describeBike();
