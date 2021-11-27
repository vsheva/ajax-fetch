const data = {};

const getData = fetch("db.json");
console.log(getData);
getData
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const sendData = fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
console.log(sendData);
sendData
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
