// 1️⃣ Function Declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Kapil");

// 2️⃣ Function Expression (assigned to a variable)
const add = function(a, b) {
  return a + b;
};
console.log("Sum:", add(5, 7));

// 3️⃣ Arrow Function
const multiply = (x, y) => x * y;
console.log("Product:", multiply(4, 3));

// 4️⃣ Function with Default Parameters
function welcome(user = "Guest") {
  console.log("Welcome, " + user + "!");
}
welcome(); // Uses default
welcome("Alice");

// 5️⃣ Function Returning a Value
function square(n) {
  return n * n;
}
let result = square(6);
console.log("Square:", result);

// 6️⃣ Function with Rest Parameters
function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log("Sum of all:", sumAll(1, 2, 3, 4, 5));

// 7️⃣ Anonymous Function (used with setTimeout)
setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);

// 8️⃣ Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("IIFE runs immediately!");
})();

// 9️⃣ Arrow Function with No Parameters
const sayHi = () => console.log("Hi there!");
sayHi();

// 1️⃣0️⃣ Function as Object Method
let calculator = {
  number: 10,
  double: function() {
    return this.number * 2;
  }
};
console.log("Double:", calculator.double());
