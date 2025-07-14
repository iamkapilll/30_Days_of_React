let global = "Global variable";

function parent() {
  let outer = "Outer variable";

  if (true) {
    let blockScoped = "Block variable";
    var functionScoped = "Function-scoped var";
    console.log(global);      // Global
    console.log(outer);       // Outer
    console.log(blockScoped); // Block
  }

  console.log(functionScoped); // Accessible (function scope)
// console.log(blockScoped);   // ❌ Error (block scope)
}

parent();
