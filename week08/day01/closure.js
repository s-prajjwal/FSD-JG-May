

// var b = 10; // global
// const c = 10; // global

// if(true) {
//     if(false) {
//         console.log("false")
//     } else {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
// }


// function abc() {
//     console.log("Hello");
//     console.log(a, b, c);
// }

// abc();


// let a = 10; // global
// const b = 15;

// if(true) {
//     a = 5;
//     var b = 25; // global scope
//     if(false) {

//         // console.log(a);
//     } else {
//         console.log(b);
//     }
//      // can be used within this block only
// }

// console.log(b);

// cannot be accessed outside the block


function greeting() {
    var greet = "Hello";
    // greet variable can only be accessed inside this function only
    // greet variable is local to this function
}

function greeting1() {
    let greet1 = "Hi";
}


// console.log(greet);
greeting();

// console.log(greeting());
// console.log(greet) // global scope ?
// let a = greeting();
// console.log(a);



    // let a = 10;
    // {
    //     a =5;
    // }
    // console.log(a);


function outer() {
    var a = 10;
    let b = 15;
    const c = a+b;

    
    function inner1 () {
        console.log(a,b,c);
    }

    return function inner2() {
        inner1();
    }

}

// Privatization of variables

// inner();

let abc = outer();
abc();
// console.log(a); // global scoope


function makeAdder(x) {
    // var x = 5;
    var a = 12;
    console.log("Hello")
    return function(y) {
        console.log(x+y) ;
    }
}

const add5 = makeAdder(5);

// add5(2);
// add5(3);
// add5(4);

const add10 = makeAdder(10);
// add10(2);


const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);