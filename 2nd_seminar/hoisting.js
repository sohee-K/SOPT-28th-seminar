/* var, let, const */
var beSopt = "web part";
let beSopt = "web part";
const BE_SOPT = "web part";

/* scope */
var a = "hello";
function hello() {
  if (true) {
    var b = 5;
    let c = false;
  }
  console.log(a); // hello
  console.log(b); // 5
  // console.log(c); // ReferenceError
}

hello();

/* hoisting */
function hoisting() {
  console.log(d); // undefined
  // console.log(e); // ReferenceError
  var d = "be";
  let e = "sopt";
  function f() {
    console.log("28th");
  }
}

/*
function hoisting() {
  var d;
  let e;
  function f() {
    console.log("28th");
  }
  console.log(d); // undefined
  // console.log(e); // ReferenceError
  d = "be";
  e = "sopt";
}
*/
hoisting();

/* hoisting practice */
var g = "web";
function outer() {
  console.log(g);
  function inner() {
    console.log(g);
    var g = "part";
  }
  inner();
  console.log(g);
}
outer();
console.log(g);

/*
var g;
function outer() {
  function inner() {
    var g;  // 재선언
    console.log("2번: ", g);  // undefined
    g = "part";
  }
  console.log("1번: ", g);  // web
  inner();
  console.log("3번: ", g);  // web
}
// 여기까지 선언부
g = "web";
outer();
console.log("4번: ", g);  // web
*/
