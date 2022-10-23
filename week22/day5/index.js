// On click of the button -
// 1. Make a fetch call to the Jokes API Server
// 2. If the response is success
// a. Display the joke on the screen
// 3. Otherwise displa the erro on the screen

const btn = document.getElementById("tellMeJoke");
btn.addEventListener("click", function () {
  // Make a fetch api call
  // fetch - returns Pomise object
  const jokeObj = fetch("https://v2.jokeapi.dev/joke/Any");
  console.log(jokeObj);

  jokeObj
    .then((data) => {
      // whatever you want to do in case of success
      return data.json();
    })
    .then((actualData) => {
      // Displaying the joke on the screen

      console.log(dataJSON);
      document.getElementById("joke").innerHTML =
        dataJSON.joke || dataJSON.setup + " - " + dataJSON.delivery;
    })
    .catch(function (err) {
      // whatever you want to do in case of failed state
      console.log(err);
      document.getElementById("joke").innerHTML = err;
    });
});

// Axios - JS Library for making API/XHR/Fetch calls
