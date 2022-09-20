// Psuedo code for Selection Sort

// Run a loop for:
// 1 - Pick an element at index i
// 2 - Store this index 'i' in a separate variable minIndex
// 3 - Compare the picked element with the remaining of the array to find the smallest number
// 4 - Swap the picked element with the element at index 'minIndex'

let arr = [7, 23, 1, 3, 5];

function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    //   console.log(arr[minIndex], arr[i]);
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

    //   [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

let result = selectionSort(arr);
console.log(result);

// arr[2] = "A";
// console.log(arr);

// Psuedo code for Bubble Sort

// Run a loop for:
// 1 - Pick an element at index i
// 2 - Compare the picked element with the remainig elements:
// 2A - if picked element > next element:
// swap the 2 elements

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

let resBubble = bubbleSort(arr);
console.log(resBubble);

console.log("Sorted by bubble sort", arr);

let a = 10;
let b = 5;
[a, b] = [b, a];
console.log(a);

function myAtoi(str) {
  if (str.length === 1) {
    return Number(str);
  } else {
    return (
      myAtoi(str.substring(0, str.length - 1)) * 10 +
      myAtoi(str[str.length - 1])
    );
  }
}

let str = "1234";
let result5 = myAtoi(str);
console.log(result5 + 1);

["b e l l a", "l a b e l", "r o l l e r"];

// b -1
// e - 1
// l -
