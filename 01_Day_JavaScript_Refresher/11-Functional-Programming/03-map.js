// 2. map
// We use the map method whenever we like to modify an array. We use the map method only with arrays and it always returns an array.

// syntax in a normal or a function declaration

// const modifiedArray = array.map(callback)



// Using function declaration

// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']

// const newCountries = countries.map(function (country) {
//   return country.toUpperCase()
// })

// console.log(newCountries)



// // map using an arrow function call back and also i prefer this method

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const newCountries = countries.map((country) => country.toUpperCase())

console.log(newCountries) // ["FINLAND", "ESTONIA", "SWEDEN", "NORWAY"]



// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
// const countriesLength = countries.map((country) => country.length)

// console.log(countriesLength) // [7, 7, 6, 6]




// const numbers = [1, 2, 3, 4, 5]
// const squares = numbers.map((n) => n ** 2)

// console.log(squares) // [1, 4, 9, 16, 25]