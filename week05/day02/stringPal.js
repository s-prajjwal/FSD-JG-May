let str = "NITINYU"
// console.log(str[str.length-1])
// Last character of any string has index = length of string - 1, becasue indexes with 0


// console.log("ATTAINU".length);

// "NITIN"
// console.log(str[4])

// Step 1 -  reverse the string
// Step 2 - reverse string === original string ?

let reverse = "";

// to find length of a string -> str.length
for(let i=str.length-1; i>=0; i--) {
    reverse = reverse + str[i]; // NITIN
}
console.log(reverse)
if(reverse === str) {
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}
