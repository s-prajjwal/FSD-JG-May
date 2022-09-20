let arr = [5,3,7,9,34,25];
// console.log(parseInt(arr.join("")));
// console.log(arr);
arr.reverse();
// console.log(arr);


// let arr1 = [2,4,6];
// let arr2 = [1,3,5];
// let arr3 = [7,8,9];

// let newArray = arr2.concat(arr1, arr3);
// let newArray1 = arr1.concat(arr3, arr2);
// console.log(arr2);

// console.log(newArray) // 1,3,5,2,4,6,7,8,9
// console.log(newArray1) // 2,4,6,7,8,9,1,3,5


let coolArray = [3,5,7,8,45,32,2,3,32];
//               0 1 2 3 4  5  6 7  8

// console.log(coolArray.lastIndexOf(32, 7));

let wordsArray = ["a", "z", "e", "b", "a"];
// console.log(wordsArray.sort((a, b) => (a > b ? -1 : 1)));

let numbersArray = [2**3, 3**2, 4**4];
// console.log(numbersArray)

let sortedArray = numbersArray.sort(function (a,b) {
    return a>b ? 1 : -1;
})

console.log(sortedArray);

// console.log("z"<"Z");


// const digits = [1,2,3,4];
// let num=0;
// for(let i=0;i<digits.length;i++) {
//     num = num*10+digits[i]
// }
// console.log(num)


let input = String(BigInt(1234753895783947598347598347598734))
console.log(input)

let arrTemp = ["abc", "abcd", "abcde"]

// ["aabc", "abbcd", "abccde"]
let str = "abcde";
console.log(str.substring(0, 3)+"c"+str.substring(3))

let resultArray = [];
for(let i=0;i<arrTemp.length;i++) {
    resultArray.push(arrTemp[i].substring(0,i+1)+ arrTemp[i][i]+ arrTemp[i].substring(i+1))
}
console.log(resultArray)