// 1. forEach
// We use forEach when we like to iterate through an array of items. The forEach is a higher-order function and it takes call-back as a parameter. The forEach method is used only with array and we use forEach if you are interested in each item or index or both.
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// numbers.forEach((n) => (sum += n))

// console.log(sum) // 15



// Let see different examples

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
countries.forEach(function (country, index, arr) {
  console.log(i, country.toUpperCase())
})