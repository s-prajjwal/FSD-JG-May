
var student = {
    rollNo: 1,
    fName: "Prajjwal",
    lastName: "Singh",
    class: 12,
    subjects: ["Maths", "Physics", "Chemistry"],
    contactNum: {
        extension: "+91",
        phoneNum: "1234567890",
        countryAddress: {
            continent: "Asia",
            country: "India",
            printCountryDetails: function() {
                console.log(this.continent, this.country, this.address)
            }
        },
        printContactDetails: function() {
            console.log(this.extension, this.phoneNum, this.countryAddress)
        }
    },
    address: {
        houseNum: "1A",
        streetName: "Wilson streeet",
    },
    printDetails: ()=> {
        // this = window
        // Arrow functions dont maintain their own this keyword
        // this = window
        console.log(this.rollNo, this.fName, this.address)
    },
    printHello: function (fName, lName) {
        let a = 5;
        let b = 10;
        console.log("Hello", a+b, fName, lName);
    },

    printBye: function() {
        console.log("Bye")
    }

}

// student.printDetails();
// console.log(student.middleName)

// this = student.contactNum.countryAddress
// student.contactNum.countryAddress.printCountryDetails();

// this = student.contactNum
// student.contactNum.printContactDetails()

// this -> its a single varibale
// this = student

// console.log("a", "b", "c")

// student.printHello("Prajjwal", "Singh")
// student.printBye()

// camelcase naming system


// student.printHello()


const arr =[1,2,4,5]
// console.log(arr.join("*"))
// console.log(arr.reverse())
// console.log(arr)

let reverseArr = []
for(let i=arr.length-1; i>=0; i--) {
     reverseArr.push(arr[i])
} 
// console.log(reverseArr)


let string3 = "17";
let string4 = "10";
let newString = +string3 + ""  +string4;
// console.log(newString);
// console.log(typeof newString);

// console.log(arr[2])
// console.log(student.address.streetName)

// console.log(student["contactNum"]["extension"], student["contactNum"]["phoneNum"])
// console.log(student.contactNum.countryAddress.continent)

// const arr1 = ["hello", "world", "bye", "hi"];

// let N = 3;
// let maxStringLength = 0;

// for(let i=0;i<arr.length;i++) {
//     let temp = ""
//     for(let j=0;j<N;j++) {
//         temp+=arr1[i+j]
//     }
//     if(maxStringLength)
// }


// console.log(maxStringLength)


// function outer() {
//     var b =10;
//     function inner() {
//         var a = 10;
//         console.log(b)
//     }
// console.log(a);

// }


// console.log(outer())

function plusone(digit){

    let num="";

    for (let i = 0; i < digit.length; i++) {
        let numbers= digit[i];
        num+=numbers;    
    }
    var plus = (parseInt(num)+1) 
    plus = plus.toString().split("");
    console.log(plus.map(Number))
    // let arr = (plus.split(""));
    //  text = arr.join();
    // let myFunc = (num) => Number(num);
    // var intarr = Array.from(String(plus),myFunc)
    
    // console.log(intarr)
}
plusone([9,9, 9])


