function sum(a,b) {
    return function inner(c) {
        return function innerMost() {
            return a+b+c;
        } // forms a closure with it's physical environment

    } // forms a closure with it's physical environment

}

// const i = sum();
// console.log(i());
// console.log(sum(2,4)(6)())




const personsArr = [{
    first: "A",
    last: "B",
}, {
    first: "X",
    last: "Y",
}, {
    first: "X1",
    last: "Y1",
}, {first: "D", last: "E"}];

function printFullDetails(a,b,c) {
    console.log(this.first, this.last, a, b, c);
}

const person1 = {
    first: "A",
    last: "B",
}

const person2 = {
    first: "X",
    last: "Y",
}

// call, apply, bind

const fun = printFullDetails.bind(person1, 1, 2,3)
printFullDetails.call(person2, 1,2,3)

// for(let i=0; i<personsArr.length;i++) {
//     // let fun = printFullDetails.bind(personsArr[i]);
//     // console.log(fun)
// }

fun();


// call, apply and bind
// you can specify the value that you want for 'this'

// printFullDetails.call(person1, "Hyderqabd", "Telangana");
// printFullDetails.call(person2, "Lucknow", "UP");

// printFullDetails.apply(person1, ["Hyderabad", "Telangan"]);

// const person1PrintDetails = printFullDetails.bind(person1, "Hyderbad", "Telangana");
// person1PrintDetails();


// console.log(person1.printFullName)

// person1.printFullName();
// person2.printFullName();
// person3.printFullName();

// printFullName(person1);
// printFullName(person2);


let arr = [1,2,3,4,5];

let res = arr.map((a)=>false);
console.log(res)


// let result = arr.filter((a, index)=> (princeRange < 1000 && princeRange > 500) && brand === "Adidas" && color === "red");
// result.sort((a,b)=>{a.price > b.price ? -1 : 1})
// let result1 = arr.filter((a, index)=>a<=2);

// {
//     brand: "Adidas",
//     color: "white",
//     price: 69
// }


// const resultArr = productsArr.map((product) => {brand: product.brand, color: product.color, price: product.price})




// console.log(result, result1)

const person1 = {
    first: "A",
    last: "B",
    phoneNum: 123,
    city: "Z",
}

function printPhoneNum(person){
        console.log(person.phoneNum)
    }

    printPhoneNum(person1)