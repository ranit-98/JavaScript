async function nill() {
    console.log("Enter");
    const url = "https://api.github.com/users";
    console.log("Enter1");
    const response = await fetch(url);
    console.log("before response");
    const users = await response.json();
    console.log("users Resolved");
    return users;
    // return "Nill"
  }
  console.log("Before Calling Nill");
  let a = nill();
  console.log("After Calling Nill");
  console.log(a);
  a.then((data) => console.log(data));
  a.catch((error) => console.log(error));