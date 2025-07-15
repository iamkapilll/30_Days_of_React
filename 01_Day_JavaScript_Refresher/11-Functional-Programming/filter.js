// 3. filter
// As you may understand from the literal meaning of filter, it filters out items based on some criteria. The filter method like forEach and map is used with an array and it returns an array of the filtered items.

// For instance if we want to filter out countries containing a substring land from an array of countries. See the example below:

// syntax in a normal or a function declaration
// const filteredArray = array.filter(callback)



// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
// const countriesWithLand = countries.filter((country) =>
//   country.includes('land')
// )
// console.log(countriesWithLand) // ["Finland", "Iceland"]




// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
// const countriesWithLand = countries.filter(
//   (country) => !country.includes('land')
// )
// console.log(countriesWithLand) // ["Estonia", "Sweden", "Norway"]



const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = numbers.filter((n) => n % 2 === 0)
const odds = numbers.filter((n) => n % 2 !== 0)
console.log(evens) // [0, 2, 4, 6, 8, 10]
console.log(odds) // [1, 3, 5, 7, 9]