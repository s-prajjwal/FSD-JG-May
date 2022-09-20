/**
 * Q - 2 ) Check if a number is Palindrome:
Given an integer, write a function that returns true if the given number is
palindrome, else false.
For example,
Sample input:
12321
Sample output:
palindrome
 */

// Recursion Approach1:

function reverseString(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
}

let num = 1232;
console.log(num);
let reverseNum = Number(reverseString(String(num)));
console.log(reverseNum);
if (num === reverseNum) {
  console.log("Pal");
} else {
  console.log("Not");
}

function pallindrome(str, l, r) {
  // base condition
  if (l >= r) {
    return true;
  }
  if (str[l] === str[r]) {
    return pallindrome(str, ++l, --r);
  } else {
    return false;
  }
}

pallindrome(String(num), 0, String(num).length - 1)
  ? console.log("Pal")
  : console.log("Not");
