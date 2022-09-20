let arr = [11, 11, 12, 13, 12, 14, 18, 15, 12];
target = 15; // Linear search or binary search
let hashTable = {};
let hashTable1 = [];
let elemetsToSearch = [11, 15, 12, 17]; // return indexes where these elements present in the acutal array

// 0. Decide the hash function (in case your hash table is an array)

// 1. create the hash table by iterating though each element in the input arr:
// if the key already exists -> push the current into the array of that key
// otherwise create an empty array for a new key (actual element in the arr)
// 2. create an empty array for result
// 3. Run a loop for elemetsToSearch array:
// Pick one element at a time and lookup inside your hash table
//  keep pushing the indexes of elements to search inside result array

// hash function - H(X) = X%10

function hashFunction(x) {
  return x % 10;
}

// hash table in array
for (let i = 0; i < arr.length; i++) {
  let currentElement = arr[i];
  let hashedIndex = hashFunction(currentElement);
  if (hashTable1[hashedIndex] === undefined) {
    hashTable1[hashedIndex] = [i];
  } else {
    hashTable1[hashedIndex].push(i);
  }
}

console.log(hashTable1);
let result1 = [];

// Lookup part for hash table as array
for (let i = 0; i < elemetsToSearch.length; i++) {
  let currentElementToSearch = elemetsToSearch[i];
  // first get the index of current element in hash table -> Hashing function
  let hashedIndex = hashFunction(currentElementToSearch);
  if (hashTable1[hashedIndex] === undefined) {
    result1.push(-1);
  } else {
    // element is present in the hash table
    result1.push(hashTable1[hashedIndex]);
  }
}

console.log(result1);

// ------------------------------------------------------------------------------------------

// hash table in object -> O(n)
for (let i = 0; i < arr.length; i++) {
  let currentElement = arr[i];
  if (currentElement in hashTable) {
    hashTable[currentElement].push(i);
  } else {
    hashTable[currentElement] = [i];
  }
}

// console.log(hashTable);
let result = [];

// Lookup part for object hash table
for (let i = 0; i < elemetsToSearch.length; i++) {
  // O(m)
  let currentElementToSearch = elemetsToSearch[i];
  // object lookup
  if (hashTable[currentElementToSearch] !== undefined) {
    //O(1)
    result.push(hashTable[currentElementToSearch]);
  } else {
    result.push(-1);
  }
}

// O(n+m)

// console.log(result);

function sumRange(nums) {
  if (nums === 1) {
    return 1;
  } else {
    return nums + sumRange(nums - 1);
  }
}
console.log(sumRange(9));
