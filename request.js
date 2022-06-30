let getButton = document.getElementById("get-btn");
let sendButton = document.getElementById("send-btn");

let sendRequest = function (method, url, data) {
  const pormise = new Promise((resolve, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);

    xhr.onload = function () {
      if (xhr.response >= 400) {
        rej("application error");
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = function () {
      rej("something  was wrong");
    };
  });
  return pormise;
};
const getData = function () {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendData = function () {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts/",
    JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    })
  )
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
};

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
