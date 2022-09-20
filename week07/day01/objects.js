let arr = [1,2,4,5,6]

// console.log(typeof arr)
arr[2] = 10;
// console.log(arr);


// for(let ele of arr) { // iterables -> array, objects
//     console.log(ele)
// }


const student = {
    rollNo: 1,
    fName: "Prajjwal",
    lastName: "Singh",
    class: 12,
    subjects: ["Maths", "Physics", "Chemistry"]
}

let studentKeys = Object.keys(student);
// [ 'rollNo', 'fName', 'lastName', 'class', 'subjects' ]
// console.log(studentKeys)

for(let key of studentKeys) {
    console.log(student[key]);
}

for(let k in student) { // k="rollNo", "fName", "lastName"
    console.log(student[k]);
}


// student["firstName"] = "Sahil"
student.firstName = "Sahil"
// console.log(student)

student.subjects.push("Economics");
// console.log(student)

// const obj = {
//     firstName: "Sahil",
//     lastName: "Arora",
//     marks: 20
// }


// camelcas
// firstName
// 

// console.log(student)

// console.log(student["rollNo"]);
// student.rollNo
// console.log(student["firstName"]);
// console.log(student.firstName);
// console.log(student["lastName"]);
// console.log(student.lastName);
// console.log(student["class"]);
// console.log(student.class)

const obj = {
    a: 1,
    d: "1",
    b: 2,
    c: "Hello"
 }

// if(obj.a > obj.b) {
//     console.log("obj. a is greater")
// } else {
//     console.log("obj.b is greater")
// }

// let d = 5

// console.log(student.firstName)
// console.log(student.rollNo)

obj.a
obj["d"] = 5;
obj["e"] ="World"
// console.log(obj)
 
delete obj["a"]
// console.log(obj)


// let arr = [1,2,4,5,6]
//         0 1 2 3 4 

const obj1 = {
    a: 1,
    b: 2,
    c: "Hello"
}
let sum = 0;
for(let k in obj1) {
 sum+=obj[k]
}
console.log(sum)
