const url = "https://jsonplaceholder.typicode.com/posts";

function myAxios(method, url, body = null) {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      if (xhr.status <= 400) {
        res(xhr.response);
      }
      rej(xhr.response);
    };

    xhr.onerror = () => {
      rej(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
}

myAxios("GET", url)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// myAxios("POST", url, { title: "testing", body: "test post request" });
