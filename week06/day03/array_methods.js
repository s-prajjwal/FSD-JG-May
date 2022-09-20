// first 10 natural numbers

// 0 1 2 3 4 5 6 7 8 9 -> 10 numbers
// 1 2 3 4 5 6 7 8 9 10 -> 10 numbers

// const arr = [2,3,4,55,43,56,32]
// //           0 1 2  3  4   5  6

// arr[2] // 3

// Write a program to take the above array and multiply each element by 2
// and then print the whole array again

// Expected ouput - [4 ,6, 8, 110, 86, 112, 64]

// i=10 -> not run
// 0 1 2 3 4 5 6
// for(let i=0;i<arr.length;i++) {
//     // to multiply each element by 2
//     // and then save it in the array
//     arr[i] = arr[i]*2
// }
// console.log(arr)

// const len = arr.length
// for(let i=0;i<len;i++) {
//     arr.push(arr[i]*2);
// }
// arr.shift();
// console.log(arr.length); 
// console.log(arr[arr.length-1]);

const arr = [2,3,4,55,43,56,32]


// let i = arr.indexOf(100);
// console.log(i)
// console.log(arr[i])

// const names=["hemant", "abhishek" ,"hrithik", "sagar","ajay","hrishikesh"]

// function  printnames(letter){
//  return names.filter(name => name[0] === letter);
// }
// console.log(printnames("h"))




let one = function (digits) {
    let carry = 0;
    for (i = digits.length - 1; i > 0; i--) {
      if (digits[i]+carry+1 < 9) {
          digits[i]= digits[i]+carry+1;
          break;
      } else {
        digits[i] = (digits[i]+carry+1)%10;
        carry = parseInt((digits[i]+carry+1)/10);
      }
    }
    return digits
  }
  
  
//   console.log(one([9,9]))
// [1,2,5]
// [1, 3, 0]
  // 130


let printGreatest = (a,b) => a>b ? "a is greater": "b is greater"

console.log(printGreatest(1,2))
