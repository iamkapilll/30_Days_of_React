// for loop
console.log("for loop:");
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// while loop
console.log("while loop:");
let x = 1;
while (x <= 3) {
  console.log(x);
  x++;
}

// do...while loop
console.log("do...while loop:");
let y = 5;
do {
  console.log(y);
  y++;
} while (y <= 3);

// for...of loop
console.log("for...of loop:");
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// for...in loop
console.log("for...in loop:");
let car = { brand: "Toyota", model: "Corolla" };
for (let prop in car) {
  console.log(prop, ":", car[prop]);
}
