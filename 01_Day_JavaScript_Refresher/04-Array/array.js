// Create array
let animals = ["dog", "cat", "elephant"];

// Access
console.log(animals[1]); // "cat"

// Modify
animals[2] = "lion";

// Add to end
animals.push("tiger");

// Remove from start
animals.shift();

// Add to start
animals.unshift("monkey");

// Find index
console.log(animals.indexOf("lion")); // 2

// Check existence
console.log(animals.includes("cat")); // true

// Convert to string
console.log(animals.join(" - ")); // "monkey - cat - lion - tiger"

// Slice (does not change original)
let smallAnimals = animals.slice(0, 2);
console.log(smallAnimals); // ["monkey", "cat"]

// Splice (modifies array)
animals.splice(1, 1, "bear"); // Replace "cat" with "bear"

// Loop
animals.forEach(animal => console.log(animal));
