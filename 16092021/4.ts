var marks: number[] = [10, 20, 30];

for (var idx in marks) {
    console.log(`Marks for student ${parseInt(idx) + 1} are ${marks[idx]}`);
}

for (var i of marks) {
    console.log(i);
}