const student = [
    {id:21, name: 'Rafiqul Islam'},
    {id:25, name: 'Joy'},
    {id:31, name: 'Rubel'},
    {id:41, name: 'Shopon'}
];

// const name1 = student.map(s => s.name);
// const name3 = student.filter(s => s.id);
// const name4 = student.filter(s => s.id>20);
const name4 = student.find(s => s.id>20);
console.log(name4);