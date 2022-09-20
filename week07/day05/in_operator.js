const obj = {
    a: 1,
    b: 2,
    c: "Hello"
}

if("z" in obj) {
    console.log("Yes")
} else {
    // z does not exist in obj
    console.log("No")
}

// console.log("z" in obj ? "Yes" : "No")

let inputArr = ["Orange","Orange","banana","apple","apple","banana","apple","apple"]

let countObj = {}

for(let ele of inputArr) { // ele="Orange"
    if(ele in countObj) {
        countObj.ele +=1; // Incrementing the count of already existing key - "Orange"
    } else {
        countObj.ele = 1; // Creating a key with "Orange" inisde your countObj
    }
}

// console.log(countObj)


const numbersArray = [1,2,3,4,5];

function sum (result, num) {
    return result+num;
}

function multiply(result, num) {
    return result*num;
}

let reduceResult = numbersArray.reduce(multiply, 1);

// console.log(reduceResult)

const strArr = ["I", "Am", "Prajjwal", "Singh"];

let str = ""
for(let ele of strArr) {
    str+=ele+" "
}
// console.log(str);

function myJoin(strArr) {
    let result = strArr.reduce(concat, "");

    function concat (acc, word) {
        return acc+" "+word;
    }

    return result;
}

// arr.map(function(num, index, arr){})
// arr.forEach(function(num, index, arr){})
// arr.filter(function(num, index, arr){})




// console.log(strArr.join(" "))
// console.log(myJoin(strArr));


// let arr = [1,2,3,4,5]

// const resultObj = arr.reduce(function(acc, num, index){
//     console.log(acc)
//   acc[index] = num;
//   return acc;
// })

// console.log(resultObj);



// let str1 = "1.1.1.1"
// 1[.]1[.]
// console.log(typeof str1.split(".").join("[.]"))

let input = "aabbcdd"
let a= "aabbcdd"
  for(let i=0;i<input.length;i++) {
     var count=0
     let j=0
   for(let j=0;j<input.length;j++){
    if(a[i]===input[j]){
     count++
     }

     }
     if(count===1){
      console.log(i)
      break;
   }
}



