// If setTimeout function would have been sync
// let id = setInterval(printHello, 1000);


// let i =1;
// function printHello () {
//     console.log("Hello");
//     if(i===10) {
//         clearInterval(id)
//     }
//     i++;
// }




// let id1 = setInterval(abc, 2000);

// clearInterval(id)

// clearInterval(setIntervalId)



// function abc() {
//     console.log("a");
// }

// function def() {
//     console.log("b");
// }

// function fun () {
//     setTimeout (printHello, 5000); // hoisting
//     def();
//     abc();
// }

// What if I want to print Hello after every 1 sec using setTimeout?

function printHello() {
    console.log("Hello")
}

let i = 1;
while(true) {
    // infinite loop
    i++;
    let timeout = setTimeout (printHello, i*1000);  

    if(i<=3) {
     clearTimeout(timeout); //break statement
    }
    if(i==5) {
        break;
    }
}

// fun();

// console.log("anything")
// let a =5;
// let b =10;
// console.log(a+b); // 10000ms



// JS interpreter is idle

//
//
//
//
//
// printHello





// let firstName = "Prajjwal";
// let lastName = "Singh";
// let bloodGroup = "AB+";

// console.log("Hello", firstName, lastName, "your blood group is - ", bloodGroup)
// console.log(`Hello ${firstName} ${lastName} your blood group is - ${bloodGroup}`)


// let a = 5;
// let b = 6;

// console.log(a, b);

// [b, a] = [a, b]

// console.log(a, b);

// ... -> rest operator
function sum (...nums) {
    console.log(nums);
    let sum = 0;
    for(let ele of nums) {
        sum = sum + ele;
    }
    return sum;
}

console.log(sum(1,2,3,4,5, "hello"))


function printSum() {
    console.log(this.a+this.b)
}

const  obj = {
    a: 1,
    b: 2,
}

const obj2 = {
    a: 3,
    b: 4,
}

printSum.call(obj);





const testObj = {
    a: 1,
    b: 2
}