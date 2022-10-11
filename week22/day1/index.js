// code

// const myDiv = document.getElementById("simpleForm");
// myDiv.addEventListener("click", function () {
//   console.log("This is your simple form div");
// });

const btn = document.getElementById("second");
// console.log("Here is your button", btn);
// btn.addEventListener("click", onSubmit);

// create a function in the global scope and use the name inside the eventListener function
function onSubmit(event) {
  console.log("The button was clicked.");
  alert("Hello from the submit button!, event listener 2");
  event.stopImmediatePropagation();
  // hide the label

  // document.getElementsByTagName("label")[0].style.visibility = "hidden";

  // document.getElementsByTagName("label")[0].style.visibility = "visible";

  //   counter++;

  //   document.getElementsByTagName("label")[0].className = "inputLabel";
  //   document.getElementsByTagName("label")[0].style.fontSize = "48px";
  //   document.getElementsByTagName("label")[0].style.backgroundColor = "red";
  //   console.log(document.getElementsByTagName("label"));
  // hide the input field
  //   document.getElementsByTagName("input")[0].style.display = "none";
}

// const inp = document.getElementById("textField");
// inp.addEventListener("focus", function () {
//   console.log("Now the input is in focus.");
//   //   inp.value = "Hellow";
// });

const myDivs = document.getElementsByClassName("myDivs");
console.log(myDivs);

console.log(
  "All the divs present in the document",
  document.getElementsByTagName("div")
);

document
  .getElementById("buttonsWrapper")
  .addEventListener("click", function (abc) {
    console.log(abc); // info about event that is running/ propogating
    alert("This is buttons wrapper!");
  });

// Submit button events

document.getElementById("second").addEventListener("click", function (event) {
  console.log(event);
  alert("This is submit button!");
  event.stopPropagation(); // Exit the event right after this function
});

document.getElementById("second").addEventListener("click", onSubmit);

document.getElementById("second").addEventListener("click", function () {
  alert("This is third click listener for submit button");
});
// useCapture -> default value -> false (Event Bubbling)

// -------------------------------------------

// document.getElementById("myButton").addEventListener("click", function () {
//   alert("This is Click here button!");
// });

document.getElementById("mySection").addEventListener("click", function (ev) {
  console.log(ev);
  alert("This is  mySection!");
});

let arr = [1, 2, 3];

arr.map(function (a) {
  console.log(a);
});
