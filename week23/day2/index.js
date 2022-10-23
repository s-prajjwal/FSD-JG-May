// Synchronous Functions
// Step by step

function greet(name) {
  // 50 lines
  return "Hello" + name;
}

const result = greet("Prajjwal!");
console.log(result);

// Asynchronous Functions
// Skipped in between

function greet2(name) {
  return new Promise(function (resolve) {
    // Return the greeting message after 2 seconds
    setTimeout(function () {
      resolve("Hello" + " " + name);
    }, 2000);
  });
}

async function main() {
  const result2 = await greet2("Prajjwal"); // this line will wait for 2 seconds

  // some code
  //   document.getElementById("p").innerHTML = result2;
}

main();
console.log("Something random");

// result2.then().catch()

let count = 0;
let res;
setTimeout(function () {
  res = count;
  console.log(res, count);
}, 2000);
count++;
