// 153

// Step 1 - Pick out all the digits
// Step 2 - Cube that digit
// Step 3 - Add this cubed digit in some variable
// Step 4 - Check new number === original number or not?

let num = 152;
let numCopy = num;
let sum = 0; // we will add all the digit cubes to this number

while(num!=0) {
    let digit = num%10;
    num = Math.floor(num/10);
    // sum = sum + (digit**3);
    console.log(digit)
}
// console.log(num);
if(sum === numCopy) {
    console.log("Armstrong")
} else {
    console.log("Not arms")
}



