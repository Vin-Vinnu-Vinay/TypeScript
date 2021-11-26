class CommonDetails {
  static collegeName: string = "OJAS";
  name: string;
  age: number;
  id: string;
  bloodGrp: string;
  constructor(name: string, age: number, id: string, bloodGrp: string) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.bloodGrp = bloodGrp;
  }
}

let obj1 = new CommonDetails("vinay", 24, "21335", "A +ve");
console.log(typeof obj1.name); //string
