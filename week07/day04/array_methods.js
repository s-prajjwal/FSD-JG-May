const arr = [3,5,21,9];

// Hello
// Hello Hello
// Hello Hello Hello

// arr.map(function(num){
//     console.log(num*2);
// });

// console.log(doubleArray);
// console.log(arr);


const mixedArray = [3,4,5,7,6,21,42,39,32];
// print even numbers in an arrray

const resultArray = mixedArray.filter(function(num) {
    return num%2 === 0;
});
// console.log(resultArray.sort((a,b)=> a>b ? 1: -1));

let inputArray = ['Oran','oran','banaa','ap','apple','banana','apple','apple',
"apple",'apple','orange','Orange','orange','Orange','banana', 'Onion', "omlette"]


const filteredArray = inputArray.filter(function(word) {
    return word.length % 2 === 0 ;
});

// console.log(filteredArray)


let str = "Hello it's going great today! How is it for you?"
const brokenString = str.split(" ");
// console.log(brokenString);

let str1 = "Sahil, Sagar, Shiv, Meenakshi, Tushar";
const names = str1.split();
// console.log(names);

let inputArr = "1,2,3,4,5,6"
// console.log(inputArr.split(',').map(Number))

// console.log(Number('123'))

let arrT = [2,3,95,7,9] // 995732
// "a" "ab"

let a = parseInt(arrT.join("").split("").map(Number).sort((a,b) => a>b ? -1: 1).join(""))
// let a = arrT.map(String).sort((a,b) => a>b ? -1: 1);
// console.log(a)


let z= (a) => {
    let b=0
    let c=[]
     for (i=0;i<a.length;i++){
      b= b*10+a[i]
     }
     b=b+1
     console.log(b)
     let newnum=0
    while(b>0){
     newnum = b%10
          b=Math.floor(b/10)
     c.unshift(newnum)
     }
     console.log(c);
    }

    // z([2,3,4,5])


let arrZ = ["1", "2", "3"]
const numArrZ = parseInt(arrZ);
console.log(numArrZ)
