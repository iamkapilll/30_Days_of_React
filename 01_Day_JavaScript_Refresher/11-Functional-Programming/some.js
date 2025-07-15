// 7. some
// The some method is used with array and return a boolean. If one or some of the items satisfy the criteria the result will be true else it will be false. Let us see it with an example.

// In the following array some numbers are even and some are odd, so if I ask you a question, are there even numbers in the array then your answer will be yes. If I ask you also another question, are there odd numbers in the array then your answer will be yes. On the contrary, if I ask you, are all the numbers even or odd then your answer will be no because all the numbers are not even or odd.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const someAreEvens = numbers.some((n) => n % 2 === 0)
const someAreOdds = numbers.some((n) => n % 2 !== 0)
console.log(someAreEvens) // true
console.log(someAreOdds) // true    


// const evens = [0, 2, 4, 6, 8, 10]
// const someAreEvens = evens.some((n) => n % 2 === 0)
// const someAreOdds = evens.some((n) => n % 2 !== 0)
// console.log(someAreEvens) // true
// console.log(someAreOdds) // false