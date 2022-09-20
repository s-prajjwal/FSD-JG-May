// function sumOf7Number (a) {
//     console.log(a);
//     return function(b,f) {
//         return function(c,d) {
//             return function (e) {
//                 return a+b+c+d+e+f;
//             }
//         }
//     }
// }


// console.log(sum(1)(2,3)(4,5)(6))

// function sum1(a,b,c,d) {
//     return a+b+c+d;
// }

// console.log(sum1(1,2,3,4))

// let d = Date();
// console.log(d);

// d = new Date();
// console.log(d.getDay());


// d = new Date(2024,0,27,23,30,56,56)
// console.log(d); // 1st January 1970 00:00


// setTimeout(function(){
//     console.log("Hello")
// }, 3000);



let i=0;
function timer() {
    let intervalId = setInterval(function(){
        i++;
        console.log("Hi", i);
        if(i==5) { // i=0
            clearInterval(intervalId); //terminate your setInterval loop
        }
    }, 1000) // it kept it aside and will wait for 1000 ms

    // i=0
    console.log("This is timer function")
    if(i==5) { // i=0
        clearInterval(intervalId); //terminate your setInterval loop
    }
}

setTimeout(timer, 3000)

console.log("ABCD")
console.log("EFGH")

// setInterval()

