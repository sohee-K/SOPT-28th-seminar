/* Boolean */
let bool = true;
bool = false;

/* Number */
let number = 123;
number = 1.7;
number = Infinity;

/* String */
const string = "web part";
console.log(`${string} is the best!`);
console.log(string + "is the best!");

/* Symbol */
const symbol1 = Symbol("description");
const symbol2 = Symbol("description");
console.log(symbol1 == symbol2); // false

/* Null */
const a = null;
console.log(typeof a); // object

/* Undefined */
const b = undefined;
console.log(typeof b); // undefined

/* Array */
const arr1 = [1, 2, 3];
const arr2 = new Array(4, 5, 6);

arr1.push(4, 5);
arr1.pop();
arr1.shift();
console.log(arr1); // [2, 3, 4]

const arr3 = arr1.concat(arr2);
const arr6 = arr2.concat(arr1);
console.log(arr3.length); // 6

const arr4 = ["be", "sopt", "web", "part"];
console.log(arr4[2]); // web
arr4.sort(); // be, part, sopt, web

const arr5 = arr4.map((item) => item + "💙");
console.log(arr5); // be💙, part💙, sopt💙, web💙

/* While */
let i = 5;
while (i > 0) {
  console.log("*".repeat(i));
  i--;
}

/* For */
for (let i = 5; i > 0; i--) {
  console.log("*".repeat(i));
}

/* For Array */
for (let i = 0; i < arr1.length; i++) {
  console.log(arr[i]);
}

for (let element of arr1) {
  console.log(element);
}

for (let index in arr1) {
  console.log(arr[index]);
}

arr1.forEach((element, index) => {
  console.log(element);
  console.log(arr[index]);
});

/* Function */
function f1() {
  console.log("f1");
}

const f2 = function _f2() {
  console.log("f2");
};

const f3 = function () {
  console.log("f3");
};

/* Function Hoisting */
function f1() {
  console.log("f1");
}
f1();

const f2;
f2(); // ReferenceError
f2 = function _f2() {
  console.log("f2");
};

const f3;
f3(); // ReferenceError
f3 = function () {
  console.log("f3");
};

/* Arrow Function */
function sayHello() {
  console.log("Hello!");
}

const sayHello = () => {
  console.log("Hello!");
};

const sum = (a, b) => a + b;
