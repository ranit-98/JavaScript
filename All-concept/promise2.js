// let success = false;

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!success) {
//         resolve([
//         //   { username: 'john', email: 'john@test.com' },
//         //   { username: 'jane', email: 'jane@test.com' },

//         ]);

//       } else {
//         reject('Failed to get the user list');
//       }
//     }, 1000);
//   });
// }

// function onFulfilled(users) {
//   console.log(users);
// }

// function onRejected(error) {
//   console.log(error);
// }

// const promise = getUsers();

// promise.then(onFulfilled).catch(onRejected);

// console.log(promise);

let success = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!success) {
        // fetch(`https://api.github.com/users`)
        //   .then((response) => response.json())
        //   .then((users) => resolve(users))
        //   .catch((error) => reject(error));
       
        let raw=fetch(`https://api.github.com/users`)
        let result=raw.then(function(response){
            return response.json();
        })
        result.then(function(users){
          return resolve(users)
        }).catch(function(error){
          return error;
        })

      } else {
        reject("Failed to get the user list");
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}

function onRejected(error) {
  console.log(error);
}

const promise =  getUsers();
console.log(promise);
promise.then(onFulfilled).catch(onRejected);

// promise.then(function(){
//   return onFulfilled;
// }).catch(function(){
//   return onRejected();
// })