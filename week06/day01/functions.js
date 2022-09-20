var abc = (a,b) => a+b; // NaN
//  // arrow function

let res = abc(5);
console.log(res);


// var abc = (a,b) => a+10+b;

// console.log(abc(1)+5) // 16


// var abc = (a) => {
//     for(let i=1;i<=3;i++) {
//          if(i==1) break;
//          return a+i;
//     }
//     return a;
// }
// console.log(abc("Hello"))


function outer(name) {
    return function inner() {
        return function sum(a,b) {
            return a*b*10;
        }
    }
}

let innerFn = outer();
let sum = innerFn("a", "b");
console.log(sum(1,2))

// console.log(outer()("Surjeet", "Singh")(1,2));


// var a=5; //5

