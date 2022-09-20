// function fun1(callback){ // callback ->function
//     callback();
// }

// function fun2(){
//     console.log("Hello")
// }

// fun1(fun2);

// let arr = [3,5,7,9,11];
// // num, idnex, arr
// function double(num1, num2, num3, num4, num5) {
//     console.log(num1*2);
//     console.log(num2);
//     console.log(num3);

//     console.log(num4);
//     console.log(num5);


// }

// function triple(num, index, arr) {
//     console.log(num*3);
//     console.log(index);
//     console.log(arr);
// }

// forEach

// arr.forEach(double);

// double(3, 0, arr)
// double(5, 1, arr)
// double(7, 2, arr)


// to double eahc element of the array arr

// for(let element of arr) {
//     double(element);
// }



// function f1(a) {
//     console.log(a);
//     f2(a+2);
// }

// function f2(b) {
//     console.log(b);
// }

// f1(3, f2)

// let arr1 = [25, 24, 19, 52, 41, 36, 45];
//       let largest = 0;
//       let index=0;
//       for (let i=0;i<arr.length;i++) {
//         let a = arr[i] - largest > 0;
//         if (a) {
//           largest = arr[i]
//           index = i;
//         }
//       }
//       console.log(index);

// arr1.splice(3, 0, 9, 10)
// console.log(arr1)

// let arr1=[3,5,22,5,7,2];
// let arr2=[9,2,42,55,71,22];

// let arr1sum=0
// let arr2sum=0;

// for (let i=0;i<arr1.length;i++){
//     arr1sum+=arr1[i]
// }

// for (let j=0;j<arr1.length;j++){
//     arr2sum+=arr2[j]
// }
// let arr3=arr2sum +arr1sum;
// console.log(parseInt(arr3));

let arr = [3,5,7,9];


arr.forEach((num) => {
    console.log(num*2);
});