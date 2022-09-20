// const arr = [1,2,3,4,5]
//           0 1 2 3 4

// console.log(arr[2]*2)


// [[1,2],[3,4],[5,6]] - 2D Array

// String, Numbers, Booleam
// Arrays, Objects, Maps, Sets -> Collection of some kind of data
// const len = arr.length //5

// this way is preferred for manipulating the array
// for(let i=0; i<len; i++) {
//     if(i==2) continue;
//     arr.push(arr[i]*2)
// }

// for...of

// [1,2,3,2,4,6,4,8,12,8,16........]

// only to read through the array
// for(let a of arr) {
//     a=a*2;
//     console.log(a);
// }
// console.log(arr)

const arr = [3,4,5,6,10,11,5]
const arrCopy = arr.slice(0);
// 10, 11

// arr.splice(arr.indexOf(5,5))
console.log(arr.indexOf(5))

// let spliceArr = arr.splice(2,2)
// console.log(spliceArr)
// console.log(arr)

// let sliceArr = arr.slice(1,4);
// console.log(sliceArr)
// console.log(arr)

