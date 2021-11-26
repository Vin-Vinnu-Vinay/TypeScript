function rst(msg: string, ...nams: string[]) {
    for (let i of nams) {
        console.log(msg + " " + i);
    }
}
rst("Welcome", "Vin", "Vinnu", "Vinay")