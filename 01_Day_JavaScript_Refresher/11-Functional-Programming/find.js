// 5. find
// If we are interested in the first occurrence of a certain item or element in an array we can use find method. Unlike map and filter, find just return the first occurrence of an item instead of an array.

// syntax in a normal or a function declaration
// const item = array.find(callback)


// Let find the first even number and the first odd number in the numbers array.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum = numbers.find((n) => n % 2 === 0)
const firstOddNum = numbers.find((n) => n % 2 !== 0)
console.log(firstEvenNum) // 0
console.log(firstOddNum) // 1


// Let us find the first country which contains a substring way
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countryWithWay = countries.find((country) => country.includes('way'))
console.log(countriesWithWay) // Norway