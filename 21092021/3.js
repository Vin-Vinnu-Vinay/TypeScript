var StudentMain = /** @class */ (function () {
    function StudentMain(sname, sid, sadd) {
        this.sname = sname;
        this.sid = sid;
        this.sadd = sadd;
    }
    return StudentMain;
}());
var Student1 = /** @class */ (function () {
    function Student1() {
        this.arr = [];
    }
    Student1.prototype.addStudent = function () {
        var obj1 = new StudentMain("Vinay", 21335, "Kothapet");
        var obj2 = new StudentMain("Venkat", 21330, "Kajjaguda");
        var obj3 = new StudentMain("Kalyan", 21333, "Uppal");
        this.arr.push(obj1, obj2, obj3);
        console.log("Added Students List which are");
    };
    Student1.prototype.viewAllStudents = function () {
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("Name: " + i.sname + ", EmployeeId: " + i.sid + ", Address: " + i.sadd);
        }
        console.log("Viewing all Students");
    };
    return Student1;
}());
var stu = new Student1();
stu.addStudent();
stu.viewAllStudents();
