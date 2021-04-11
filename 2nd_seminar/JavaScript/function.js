/* Object */
const sohee = {
  fullName: "Sohee Kwon",
  age: 24,
  lang: ["Korean", "English", "Dutch", "French", "JS"],
  sayHi: () => {
    console.log("Goedemiddag!");
  },
};

console.log(sohee.lang[1]);
sohee.sayHi();

/* scope */
let a = 1;
let b = 2;
const c = () => {
  let b = 3;
  console.log(a); // 1
  console.log(b); // 3
};
console.log(b); // 2

c();

/* Parameter and Argument */
const sum = (a, b) => a + b;
sum(12, 34);

/* return */
const getDiff = (a, b) => {
  if (a > b) return a - b;
  else return b - a;
};
getDiff(40, 36);

const sayHi = () => {
  console.log("Hi");
  // return undefined;
};

/* Sync & Async */

// const first = () => {
//   console.log("first");
// };

// const second = () => {
//   console.log("second");
// };

// first();
// second();

const first = (callback) => {
  setTimeout(() => {
    console.log("first");
    callback();
  }, 1000);
};

const second = () => {
  console.log("second");
};

first(second);

const getCoffee = (coffee) => {
  setTimeout(() => {
    coffee = "Ice Americano";
    console.log(coffee);
  }, 3000);
};
let coffee = null;
getCoffee(coffee); // Ice Americano

/* CallBack Hell */
// function callBackHell() {
//   doSomething1(function() {
//     doSomething2(function() {
//       doSomething3(function() {
//         doSomething4(function() {
//           doSomething5(function() {
//             doSomething6(function() {
//               doSomething7(function() {
//                 ...
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// }
