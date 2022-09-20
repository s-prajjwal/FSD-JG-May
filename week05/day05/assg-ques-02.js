// create a function expression for reversing a number
// write the logic of reversing a number

var reverseNumber = function(num) {
    // the logic of reversing a number
    let reverseNum = 0;
    while(num>0) {
        let lastDigit = num%10;
        num = parseInt(num/10);
        reverseNum = reverseNum*10 + lastDigit
    }

    return reverseNum;
}

let result = reverseNumber(12345);
console.log(result)

// 123 -> 321