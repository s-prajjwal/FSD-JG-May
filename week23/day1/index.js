// ---------------------------------Promises------------------------------------

// const arr = [];
// const arr = new Array(1, 2, 3);

// 1st paramter = A callback function
function fetch(url) {
  const promiseObj = new Promise(function (resolve, reject) {
    // set of actions that you take after making the promise
    // if(I studied really hard) {
    // success()
    //}
    // else {
    // failed()
    // }

    // Makes some communication with the url passing the parameter -> response
    if (response.status === 200) {
      // trigegr the succes of your promise
      resolve(response);
    }
    if (
      response.statusCode === 401 ||
      esponse.statusCode === 402 ||
      esponse.statusCode === 403 ||
      esponse.statusCode === 404
    ) {
      // trigger the failure of your promise
      reject(response.err);
    }
  });

  return promiseObj;
}

// 200 - success
// 401, 402, 403, 404 - there was some problem in the comminucitaion with the DB

const simplePromiseObj = new Promise(promiseFunc);

// 3 states - success, pending, failed

function promiseFunc(resolve, reject) {
  // I want to trigger succes of this promise after 3 seconds
  //   setTimeout(function () {
  //     resolve("This is resolve");
  //   }, 3000);
  if (true) {
    resolve("1");
  } else {
    reject({ data: 1, msg: "SOme success message" });
  }
}

simplePromiseObj
  .then((response) => {
    console.log(response);
    return response.msg;
  })
  .then((str) => {
    console.log(str);
  })
  .catch((err) => {
    console.log("This is catch section: ", err);
  });

function greet(name) {
  //   return new Promise(function (res) {
  //     setTimeout(function () {
  //       res("Hello" + name);
  //     }, 3000);
  //   });

  setTimeout(() => {
    return "Hello" + name;
  }, 2000);
}

async function main() {
  const result = await greet("Prajjwal!");
  console.log("Hello world");
  console.log(result);
  console.log("Hi");
}

main();

//
//
//
//

// function greet(name) {
//   return "Hello" + name;
// }

// const result = greet("Prajjwal!");
// console.log(result);
