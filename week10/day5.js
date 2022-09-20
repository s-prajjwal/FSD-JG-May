// function sum(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return sum(--n) + n;
//   }
// }

// console.log(sum(6));

// function fact(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return (fact(--n)) * n;
//   }
// }

// console.log(fact(5));


// function fib(n) {

//     // base condition
//     if(n < 2) { // n =0,1
//         return n; // for the first 2 elements of fibonacci series
//     }

//     // else condition -> call the fib function
//     else {
//         return fib(n-1) + fib(n-2);
//     }

// }

// // Time complexity  = O(2^n)

// // Time complexity = O(n) // fo

// console.log(fib(100))


// let count =0;

// function fib(n) {
//     count++;
//     // base condition
//     if(n < 2) { // n =0,1
//         return n; // for the first 2 elements of fibonacci series
//     }

//     // else condition -> call the fib function
//     else {
//         return fib(n-1) + fib(n-2);
//     }

// }

// fib(7);
// console.log(count);



let nums1 = [1,2,3, 4,7,8];
let count = 0;
for(let i=0;i<nums1.length;i++) {
    for(let j=i+1;j<nums1.length;j++) {
        count++;
        if(nums1[j] < nums1[i]) {
            [nums1[i], nums1[j]] = [nums1[j], nums1[i]]
        }
    }
}

console.log(nums1, count)
