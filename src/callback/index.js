// 1
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// 2
setTimeout(function () {
  console.log("Hola Jack");
}, 2000);

// 3
function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Adrian");
