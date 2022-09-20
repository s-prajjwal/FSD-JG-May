// 6*5*4*3*2*1 = 720 - Factorial of 6

// 5*4*3*2*1 = 120 - Factorial of 5

// 4*3*2*1 = 24 - Factorial of 4

// 4*3*2*1 = 1*2*3*4

let num = 7;
let fact = 1;
for(let i=1;i<=num;i++) { 
    fact = fact*i;
}
console.log(fact);
