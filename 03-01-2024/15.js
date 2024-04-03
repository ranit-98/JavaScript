let p = new Promise((res, rej) => {
  setTimeout(() => {
    if (true) {
      fetch(`https://api.github.com/users`)
        .then((response) => {
           return response.json();
        })
        .then((data) => {
           return res(data);
        })
        .catch((error) => {
          return error
        });
    } else {
        return rej("rejected");
    }
  }, 2000);
});
p.then((data) =>{console.log(data)}).catch((error) => console.log(error));
