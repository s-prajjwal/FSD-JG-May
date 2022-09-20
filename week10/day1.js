const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// n =2;
// m = 3;

let n = mat.length;
let m = mat[0].length;

// Elements of left diagonal
// for(let i=0; i<n;i++) {
//     console.log(mat[i][i])
// }

// Elements of right diagonal
// j = m-1-i;
// for(let i=0;i<m;i++) {
//     console.log(mat[i][m-1-i])
// }

// Print all the elements
// for(let i=0; i<n;i++) {
//     let str = "";
//     for(let j=0; j<m; j++) {
//         str+=mat[i][j]+" "
//     }
//     console.log(str)
// }

// for(let i=0; i< n; i++) {
//     console.log(...mat[i]);
// }

// 1 2 3
// 4 5 6
// 7 8 9

const mat1 = [
  [1, 2],
  [3, 4],
];
const mat2 = [
  [5, 6],
  [7, 8],
];

const res = [];

for (let i = 0; i < mat1.length; i++) {
  res[i] = [];
  for (let j = 0; j < mat1[0].length; j++) {
    res[i].push(mat1[i][j]);
  }
  for (let j = 0; j < mat2[0].length; j++) {
    res[i].push(mat2[i][j]);
  }
}

console.log(res);

/* Q2. Write the above code to enter details of 10 students, and take input
from the user.
Hint: use loops. */
var arrstnd = [];
class Student {
  constructor(name, rollNumber) {
    (this.Name = name), (this.rollNumber = rollNumber);
    console.log(`Name ${this.Name} Roll number ${this.rollNumber}`);
  }
}
for (i = 0; i < 10; i++) {
  arrstnd.push(
    new Student(prompt("Enter your name"), prompt("Enter your roll number"))
  );
}

let inputArr = [1, 1, 2, 3, 2, 4, 3];

let obj = {};

for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] in obj) {
    obj[inputArr[i]].push(i);
  } else {
    obj[inputArr[i]] = [i];
  }
}

let arr = ["2", "3"];

let result = [...arr.map(Number)];

console.log(result);
