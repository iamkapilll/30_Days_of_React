// When we destructure an object the name of the variable should be exactly the same as the key or property of the object. See the example below.

// const rectangle = {
//   width: 20,
//   height: 10,
// }

// let { width, height } = rectangle
// console.log(width, height, perimeter) // 20, 10




// Renaming variable names

// const rectangle = {
//   width: 20,
//   height: 10,
// }

// let { width: w, height: h } = rectangle




// We can just destructure step by step

// const props = {
//     user: {
//         firstName: 'Asabeneh',
//         lastName: 'Yetayeh',
//         age: 250
//     },
//     post: {
//         title: 'Destructuring and Spread',
//         subtitle: 'ES6',
//         year: 2020
//     },
//     skills: ['JS', 'React', 'Redux', 'Node', 'Python']

// }


// const { user, post, skills } = props
// const { firstName, lastName, age } = user
// const { title, subtitle, year } = post
// const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills




// We can destructure it one step
const props = {
  user:{
    firstName:'Asabeneh',
    lastName:'Yetayeh',
    age:250
  },
  post:{
    title:'Destructuring and Spread',
    subtitle:'ES6',
    year:2020
},
skills:['JS', 'React', 'Redux', 'Node', 'Python']

}


const {user:{firstName, lastName, age}, post:{title, subtitle, year}, skills:[skillOne, skillTwo, skillThree, skillFour, skillFive]} = props


// Destructuring during loop through an array

// const languages = [
//   { lang: 'English', count: 91 },
//   { lang: 'French', count: 45 },
//   { lang: 'Arabic', count: 25 },
//   { lang: 'Spanish', count: 24 },
//   { lang: 'Russian', count: 9 },
//   { lang: 'Portuguese', count: 9 },
//   { lang: 'Dutch', count: 8 },
//   { lang: 'German', count: 7 },
//   { lang: 'Chinese', count: 5 },
//   { lang: 'Swahili', count: 4 },
//   { lang: 'Serbian', count: 4 },
// ]

// for (const { lang, count } of languages) {
//   console.log(`The ${lang} is spoken in ${count} countries.`)
// }





// Destructuring function parameter

// const rectangle = { width: 20, height: 10 }
// const calcualteArea = ({ width, height }) => width * height
// const calculatePerimeter = ({ width, height } = 2 * (width + height))