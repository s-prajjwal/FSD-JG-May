var num = 5;

// find all the factors between 1 and 24

// 3 - 1 and 3 -> 2 factors -> prime
// 4 - 1 , 2 , 4 - 3 factors > 2 -> not a prime
// 5 - 1, 5
// 6 - 1, 2, 3, 6 - not a prime

// 24 - 1, 2, 3, 4, 6, 8, 12, 24 -> 8 factors -> not a prime

// no of factors of num > 2 -> not a prime
// no of factors of num === 2 -> its a prime

// keep the count of the factors
let factorsCount = 0;
const isPrime=true;
for(let j=2; j<=50;j++) {
    
    for(let i=2; i<j; i++) {
        if(j%i===0) {
            // factorsCount++; // 0->1 ->2 -> 3 -> 4 ->5
            isPrime=false; // error
            break;
        }
    }
    if(isPrime) {
        console.log(j)
    }
}


let x = 50 // global scope

function func(x) {
console.log('x is', x) // 50
x = 2
console.log('Changed local x to', x) // 2
}

func(x) // 50
console.log('x is now', x) // 50

for(let i=1;i<=100;i++) {
    if(i%2===0) {
        console.log(i);
    }
}
