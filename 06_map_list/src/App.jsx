// ## OBJECT MAPPING
import './App.css'



const Country = ({country}) =>{
    const {name, city} = country
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

//Country component:
const Countries =({countries}) =>{
  const countryList = countries.map((country) =>(
    <Country key={country.name} country={country} /> // added key ie identifer to the react
  ))
  return (
    <div>
      {countryList}
    </div>
  )
}

// App Component
function App() {
  const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]
  

  return (
    <>
      <h1>Country list:</h1>
      <Countries countries={countries} />
      
    </>
  )
}

export default App




//## ARRAY MAPPING
// import './App.css'

// const skills = [
//   ['HTML', 10],
//   ['CSS', 7],
//   ['JavaScript', 9],
//   ['React', 8],
// ]

// // Skill Component
// const Skill = ({ skill }) => {
//   const [tech, level] = skill
//   return <li>{tech} - Level {level}/10</li>
// }

// // Skills Component
// const Skills = ({ skills }) => {
//   const skillsList = skills.map((skill, index) => (
//     <Skill key={index} skill={skill} />
//   ))
//   return <ul>{skillsList}</ul>
// }

// // App Component
// const App = () => {
//   return (
//     <div className='container'>
//       <h1>Skills Level</h1>
//       <Skills skills={skills} />
//     </div>
//   )
// }

// export default App




















//##1
// import './App.css'

// const Numbers = ({numbers}) =>{
//     const list = numbers.map((number) => <li>{number}</li>)
//     return list
// }


// function App() {

//   const numbers = [1,2,3,4,5,6]


//   return (
//     <>
//     <h1>Numbers:</h1>
//     <ul>
//       <Numbers numbers={numbers} />
//     </ul>
     
//     </>
//   )
// }

// export default App
