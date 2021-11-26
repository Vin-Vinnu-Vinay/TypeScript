var CommonDetails = /** @class */ (function () {
    function CommonDetails(name, age, id, bloodGrp) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.bloodGrp = bloodGrp;
    }
    CommonDetails.collegeName = "OJAS";
    return CommonDetails;
}());
var obj1 = new CommonDetails("vinay", 24, "21335", "A +ve");
console.log(typeof obj1.name);
