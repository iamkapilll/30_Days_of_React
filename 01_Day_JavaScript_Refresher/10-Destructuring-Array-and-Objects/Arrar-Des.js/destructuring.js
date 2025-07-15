// const numbers = [1, 2, 3]
// let num1 = numbers[0]
// let num2 = numbers[1]
// let num3 = numbers[2]
// console.log(num1, num2, num3) // 1, 2, 3

// const countries = ['Finland', 'Sweden', 'Norway']
// let fin = countries[0]
// let swe = countries[1]
// let nor = countries[2]
// console.log(fin, swe, nor) // Finland, Sweden, Norway



// Accessing array items using destructuring

// const numbers = [1, 2, 3]
// const [num1, num2, num3] = numbers
// console.log(num1, num2, num3) // 1, 2, 3,

// const constants = [2.72, 3.14, 9.81,37, 100]
// const [e, pi, gravity, bodyTemp, boilingTemp] = constants
// console.log(e, pi, gravity, bodyTemp, boilingTemp]
// // 2.72, 3.14, 9.81, 37,100
// const countries = ['Finland', 'Sweden', 'Norway']
// const [fin, swe, nor] = countries
// console.log(fin, swe, nor) // Finland, Sweden, Norway



// Destructuring Nested arrays

// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ]

// const [frontEnd, backEnd] = fullstack
// console.log(frontEnd, backEnd)

// //["HTML", "CSS", "JS", "React"] , ["Node", "Express", "MongoDB"]

// const fruitsAndVegetables = [['banana', 'orange', 'mango', 'lemon'],  ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']]

// const [fruits, vegetables] = fruitsAndVegetables
// console.log(fruits, vegetables]

// //['banana', 'orange', 'mango', 'lemon']

// //['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']




// Getting the rest of the array using the spread operator We use three dots(...) to spread or get the rest of an array during destructuring

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3, rest) //1, 2, 3, [4, 5, 6, 7, 8, 9, 10]

const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland',
]

let [gem, fra, , ...nordicCountries] = countries
console.log(gem, fra, nordicCountries)
// Germany, France,  ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]



// Destructuring when we loop through arrays

// const countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo'],
// ]

// for (const [country, city] of countries) {
//   console.log(country, city)
// }

// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB'],
// ]

// for (const [first, second, third, fourth] of fullStack) {
//   console.log(first, second, third, fourt)
// }




// What do you think about the code snippet below? If you have started React Hooks already it may remind you of the useState hook.

// const [x, y] = [2, (value) => value ** 2]