interface Student {
    addStudent(): void;
    viewAllStudents(): void;
}

class StudentMain {
    constructor(public sname: string, public sid: number, public sadd: string) {

    }
}

class Student1 implements Student {
    arr: StudentMain[] = [];
    addStudent(): void {
        let obj1: StudentMain = new StudentMain("Vinay", 21335, "Kothapet");
        let obj2: StudentMain = new StudentMain("Venkat", 21330, "Kajjaguda");
        let obj3: StudentMain = new StudentMain("Kalyan", 21333, "Uppal");
        this.arr.push(obj1, obj2, obj3);
        console.log("Added Students List which are");

    }
    viewAllStudents(): void {
        for (let i of this.arr) {
            console.log(`Name: ${i.sname}, EmployeeId: ${i.sid}, Address: ${i.sadd}`);

        }
        console.log("Viewing all Students");
    }

}

let stu = new Student1();
stu.addStudent();
stu.viewAllStudents();