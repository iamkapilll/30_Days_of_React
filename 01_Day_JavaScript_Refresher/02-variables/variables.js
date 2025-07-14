// VAR, LET, CONST
var oldVariable = "I am declared with var"; // Function-scoped
let modernVariable = "I am declared with let"; // Block-scoped
const constantVariable = "I cannot be reassigned";

// PRIMITIVE TYPES
let myNumber = 42; // Number
let myString = "Hello, JavaScript!"; // String
let myBoolean = true; // Boolean
let myNull = null; // Null
let myUndefined; // Undefined
let myBigInt = 1234567890123456789012345678901234567890n; // BigInt
let mySymbol = Symbol("unique"); // Symbol

// REFERENCE TYPES
let myArray = [1, 2, 3, "four", true];
let myObject = {
  name: "Alice",
  age: 30
};
let myFunction = function() {
  console.log("I am a function!");
};

// REASSIGNING
modernVariable = "New value assigned";
// constantVariable = "This will cause an error!"; // Uncomment to see error

// NAMING CONVENTIONS
let camelCaseVariable = "camelCase";
let _underscoreVariable = "starts with underscore";
let $dollarVariable = "starts with dollar sign";
// let 1invalidVariable = "Invalid"; // Cannot start with a number

// TEMPLATE LITERALS
let user = "Bob";
let greeting = `Hello, ${user}! Welcome.`;

// DYNAMIC TYPING
let dynamic = "I am a string";
dynamic = 100; // Now I'm a number

// TYPE CHECKING
console.log(typeof myNumber); // "number"
console.log(typeof myString); // "string"
console.log(typeof myNull); // "object" (quirk of JS)
console.log(typeof myUndefined); // "undefined"
console.log(typeof myBigInt); // "bigint"
console.log(typeof mySymbol); // "symbol"
console.log(typeof myArray); // "object"
console.log(typeof myFunction); // "function"

// OUTPUT
console.log(oldVariable);
console.log(modernVariable);
console.log(constantVariable);
console.log(myArray);
console.log(myObject);
myFunction();
console.log(greeting);
console.log(`Dynamic variable is now: ${dynamic}`);
