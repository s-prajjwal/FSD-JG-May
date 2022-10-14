// On click of the button -
// 1. Make a fetch call to the Jokes API Server
// 2. If the response is success
// a. Display the joke on the screen
// 3. Otherwise displa the erro on the screen

const btn = document.getElementById("tellMeJoke");
btn.addEventListener("click", function () {
  // Make a fetch api call
  const jokeObj = fetch("https://v2.jokeapi.dev/joke/Any");
  console.log(jokeObj);

  jokeObj
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      // Displaying the joke on the screen

      console.log(data);
      document.getElementById("joke").innerHTML = data.joke || data.setup;
    })
    .catch((error) => {
      console.log(error);
      // Displaying the error on the screen
    });
});
