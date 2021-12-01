const getData = (url) => {
  return fetch(url)
      .then((response) => response.json());
};


const sendData = ({ url, data = {}, method = "GET" }) => {
  return fetch(url, {
    method: method,
    body: data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};


getData("db.json")
    .then((response) => {
      sendData({
        url: "https://jsonplaceholder.typicode.com/posts",
        data: JSON.stringify(response),
        method: "POST",
      }).then((data) => {
            console.log(data);
          })
    }).catch((error) => {
      console.log(error);
    });