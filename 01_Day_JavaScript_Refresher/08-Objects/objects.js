// 1️⃣ Create an object with properties
let person = {
  name: "Kapil",
  age: 21,
  country: "Nepal"
};

// 2️⃣ Access properties
console.log("Name:", person.name);
console.log("Age:", person["age"]);
console.log("Country:", person.country);

// 3️⃣ Modify properties
person.age = 22;
person.city = "Kathmandu";

// 4️⃣ Add a method using 'this'
person.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// 5️⃣ Call the method
person.greet();

// 6️⃣ Nested object
person.contact = {
  email: "kapil@example.com",
  phone: "123-456-7890"
};

// 7️⃣ Access nested properties
console.log("Email:", person.contact.email);
console.log("Phone:", person.contact.phone);

// 8️⃣ Loop through all properties (excluding nested)
console.log("Person Properties:");
for (let key in person) {
  // Skip functions
  if (typeof person[key] !== "function") {
    console.log(`${key}:`, person[key]);
  }
}

// 9️⃣ Use Object.keys and Object.values
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));

// 1️⃣0️⃣ Destructuring
let { name, age, country } = person;
console.log(`Destructured: ${name}, ${age}, ${country}`);
