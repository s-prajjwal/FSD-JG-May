function printNames(...restNames) {
    // console.log(name1);
    // console.log(name2);
    console.log(restNames);
}


const namesArr = ["Sahil", "Shiv", "Tushar", "Sagar"];
// printNames(...namesArr)


const arr1 = [1,2,8,9,3];
const arr2 = [4,5,6];
// console.log([arr1[arr1.length-1], ...arr2, arr1.slice(0)])


const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7
}

console.log([...obj2])

// console.log(Object.keys(obj2).map(key => ({[key]: obj2[key]})))

const result = {
    ...obj1, ...Object.keys(obj2).map(key => {return {[key]: obj2[key]}})
}

// console.log(result)

/**
 * {
 *   a: 1,
 *   b: 2,
 *   c: 3,
 *   d: 4
 * }
 */







// call(thisArg, param1, param2..........)

// function call(valueForThis, ...otherParams) {

// }

// apply(thisArg, [aram1, param2..........])

// function apply(valueForThis, otherParams) {

// }