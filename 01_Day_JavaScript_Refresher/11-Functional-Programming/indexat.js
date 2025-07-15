// 6. findIndex
// The findIndex method works like find but findIndex returns the index of the item. If we are interested in the index of a certain item or element in an array we can use findIndex. The findIndex return the index of the first occurrence of an item.

// syntax in a normal or a function declaration

// const index = array.findIndex(callback)


// Let us find the index of the first even number and the index of the first odd number in the numbers array.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenIndex = numbers.findIndex((n) => n % 2 === 0)
const firstOddIndex = numbers.findIndex((n) => n % 2 !== 0)
console.log(firstEvenIndex) // 0
console.log(firstOddIndex) // 1


// Let us find the index of the first country in the array which has exactly six characters

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const index = countries.findIndex((country) => country.length === 6)
console.log(index)//2
