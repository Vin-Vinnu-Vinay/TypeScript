function rst(msg) {
    var nams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nams[_i - 1] = arguments[_i];
    }
    for (var _a = 0, nams_1 = nams; _a < nams_1.length; _a++) {
        var i = nams_1[_a];
        console.log(msg + " " + i);
    }
}
rst("Welcome", "Vin", "Vinnu", "Vinay");
