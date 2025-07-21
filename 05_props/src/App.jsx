
// props in function
import './App.css'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>




function App() {

  const sayHi= () =>{
    alert("hi")
  }

 

  return (
    <>

    <Button text="say hi" onClick={sayHi} />
    <Button text="show time" onClick={alert(new Date())} />

    </>
  )
}

export default App






















// import './App.css'

// const Header = (props) =>{
//   <header>
//     <div className='header-wrapper'>
//       <h1>{props.data.welcome}</h1>
//       <h2>{props.data.title}</h2>
//       <h3>{props.data.subtitles}</h3>
//     </div>
//   </header>
// }





// function App() {

//   const data = {
//     welcome: "welcome to the 30 days of react.js",
//     title: "This is about props in object",
//     subtitles:" i don't think there is any subtitles here"

//   }

 

//   return (
//     <>
//       <App data={data} />
//     </>
//   )
// }

// export default App




















//##Array
// import './App.css'



// const Skills = (props) => {
//   const skillList = props.skills.map((skills) => <li key={skills}>{skills}</li>)
//   return <ul>{skillList}</ul>
// }


// function App() {

 

//   return (
//     <>
//     <Skills skills={['html','css', 'js']} />

//     </>
//   )
// }

// export default App






























//##4 props numbers
// import './App.css'



// const Age = (props) => <div>you are {props.age} years old</div>

// const Weight = (props) => <div>you are {props.weight} kg</div>


// function App() {

//   let birthYear = 2004
//   let currentYear = new Date().getFullYear()

//   let age = currentYear - birthYear

//   let weight = 70

//   return (
//     <>
//    <Age age={age}/>
//    <Weight weight={weight} />
      
//     </>
//   )
// }

// export default App














//##3 string
// import './App.css'

// const Header = (props) => {
//   console.log(props)
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{props.welcome}</h1>
//         <h1>{props.firstName} {props.lastName}</h1>
//         <p>{props.background}</p>
//         <h1>{props.date}</h1>
//       </div>
//     </header>
//   )
// }

// function App() {
//   const welcome = 'Hello world'
//   const name = {
//     firstName: 'Kapil',
//     lastName: 'Dev'
//   }
//   const background = "I am a CS student from TU"
  
//   // Format the date
//   const date = new Date().toLocaleDateString('en-US', {
//     year: 'numeric', month: 'long', day: 'numeric'
//   })

//   return (
//     <>
//       <Header
//         welcome={welcome}
//         firstName={name.firstName}
//         lastName={name.lastName}
//         background={background}
//         date={date}
//       />
//     </>
//   )
// }

// export default App



















 
// ##2 string
// import './App.css'

// const Header = (props) => {
//   console.log(props)
//   return(
//      <header>
//     <div className='header-wrapper'>
//       <h1>{props.welcome}</h1>
//       <h1>{props.name}</h1>
//       <p>{props.background}</p>
//       <h1>{props.date}</h1>
//     </div>
//   </header>
//   )
 
// }


// function App() {


//   return (
//     <>
//       <Header 
//       welcome="welcome to the best time of your life"
//       name="kapil dev"
//       background="i am from nepal and a 3 year student"
//       date= "2025"

//        />
//     </>
//   )
// }

// export default App  














// ##1
// import './App.css'


// // const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {  
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
// }
// const date = 'Oct 4, 2020'


// const Header = (props) => {
//   console.log(props) // empty object, {}
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{props.welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {author.firstName} {author.lastName}
//         </p>
//         <small>{date}</small>
//       </div>
//     </header>
//   )
// }

// function App() {


//   return (
//     <>
//      <Header welcome='welcome to the 30 days of react.js...' />
//     </>
//   )
// }

// export default App  
