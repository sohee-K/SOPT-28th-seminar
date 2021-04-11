const getCoffee = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("Ice Americano"), 3000);
  setTimeout(() => reject(null), 3000);
});

getCoffee
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("done!"));

const getValue = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000);
});

getValue
  .then((result) => result * 2)
  .then((result) => result * 2)
  .then((result) => result * 2)
  .then((result) => {
    console.log(result); // 16
    throw Error("error!");
  })
  .catch((error) => console.log(error)); // error!

// const getUserData = new Promise((resolve, reject) => {
//   const data = fetch("https://api.github.com/users/sohee-K");
//   resolve(data);
//   console.log(data); // Promise 객체
// });

// getUserData
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const getUserData = async () => {
  const response = await fetch("https://api.github.com/users/sohee-K");
  const data = await response.json();
  console.log(data);
};

getUserData();
