// Run a loop for numbers 1 to 100
    // For each number we will check whether the number is prime or not




// 3 -> 1 and 3
// 24 -> 1, 2, 3, 4, 6, 8, 12, 24

for(let j=2; j<=100; j++) {
    let factorsCount = 0;
    for(let i=1;i<=j;i++) {
        if(j%i == 0) {
            ++factorsCount;
        }
    }
    if(factorsCount === 2 ) { // 1 and the number itself
        console.log(j)
    }
}

// let num =6;

// 5 -> 2 , 3, 4
// 4 -> 2, 3
// 6 -> 2,3,4,5 -> not prime
for(let j=2; j<=100; j++) {
    let flag=true; // its a prime number
    for(let i=2;i<j;i++) {
        if(j%i == 0) {
            flag = false; // its not a prime number
            break;
        }
    }
    if(flag) {
        console.log(j)
    }
}
