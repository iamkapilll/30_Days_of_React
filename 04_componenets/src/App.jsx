import './App.css' 

// level two practice from 30 days of react challenge
function App(){
 const author = {
  firstName: 'kapil',
  lastName: 'dev'
 }

 const copyRight = '2025'

  const htmllogo = 'data:image/png;base64,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'
   const csslogo = 'data:image/png;base64,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'
  const jslogo = 'data:image/png;base64,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'
  
const Header = () =>(
  <header>
    <div className='head-wrapper'>
      <h1>{author.firstName} {author.lastName} </h1>
    </div>
  </header>
)

  const Main = () => (
    <main>
      <div className='main-wrapper flex justify-around gap-2.5  bg-pink-700'>
        <img className='rounded-full flex duration-500 cursor-pointer' src={htmllogo} alt="html" />
        <img className='rounded-full flex cursor-pointer' src={csslogo} alt="css" />
        <img className='rounded-full flex cursor-pointer' src={jslogo} alt="" />
      </div>
    </main>
  )

const Footer = () =>(
  <footer>
    <div className='footer-wrapper fixed bottom-12 justify-center text-center ml-130'>

      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
  
)

  return (
    <>
    <Header />
    <Main />
    <Footer />
     
    </>
  )
}

export default App


























//#3

// function App() {
//   const welcome = 'Welcome to 30 Days of React Challenge'
//   const title = 'Getting Started React'
//   const subtitle = 'JavaScript Library'
//   const author = {
//     firstName: 'Kapil',
//     lastName: 'Dev'
//   }

//   const date = new Date().toDateString() // fixed

//   const Header = () => (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>//injecting data
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>Instructor: {author.firstName} {author.lastName}</p>
//         <small>Date: {date}</small>
//       </div>
//     </header>
//   )

//   const numOne = 3
//   const numTwo = 2
//   const result = (
//     <p>{numOne} + {numTwo} = {numOne + numTwo}</p>
//   )

//   const yearBorn = 2004
//   const currentYear = new Date().getFullYear() // fixed
//   const age = currentYear - yearBorn

//   const personAge = (
//     <p>{author.firstName} {author.lastName} is {age} years old</p>
//   )

//   const techs = ['HTML', 'CSS', 'JavaScript']
//   const techformatted = techs.map((tech) => <li key={tech}>{tech}</li>) // fixed

//   const UserCard = () => (
//     <div className='user-card'>
//       <img src='https://media.licdn.com/dms/image/v2/D4D03AQH5LPeOtmhr3g/profile-displayphoto-scale_400_400/B4DZfGZDTKGYAg-/0/1751380147137?e=1755734400&v=beta&t=GWzT_TFMlUki8gEYf7VQRA7m-MtNC0Jm6Oeva6gSxZU' alt='kapil' />
//       <h2>{author.firstName} {author.lastName}</h2>
//     </div>
//   )

//   const Main = () => (
//     <main>
//       <div className='main-wrapper'>
//         <p>
//           Prerequisite to get started with <strong><em>React.js</em></strong>:
//         </p>
//         <ul>{techformatted}</ul>
//         {result}
//         {personAge}
//         <UserCard />
//       </div>
//     </main>
//   )

//   const copyRight = '2025'

//   const Footer = () => (
//     <footer>
//       <div className='footer-wrapper'>
//         <p>Copyright &copy; {copyRight}</p>
//       </div>
//     </footer>
//   )

//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   )
// }

// export default App




















//#2
// function App() {
//   const Header = () => (
//     <header>
//       <div className='header-wrapper bg-red-400'>
//         <h1>Welcome to the React Components</h1>
//         <h2>Getting Started React</h2>
//         <h3>JavaScript Library</h3>
//         <p>Kapil Dev</p>
//         <small>Jul 20, 2025</small>
//       </div>
//     </header>
//   )

//   const Usercard = () => (
//     <div className='user-card'>
//       <img
//         className='flex justify-center size-100 shadow-2xl rounded-full'
//         src="https://media.licdn.com/dms/image/v2/D4D03AQH5LPeOtmhr3g/profile-displayphoto-scale_400_400/B4DZfGZDTKGYAg-/0/1751380147137?e=1755734400&v=beta&t=GWzT_TFMlUki8gEYf7VQRA7m-MtNC0Jm6Oeva6gSxZU"
//         alt="kapil"
//       />
//       <h2>Kapil Dev</h2>
//     </div>
//   )


//   const Techlist = () => {
//   const techs = ['html', 'css', 'js']
//   const techformatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//   return techformatted
// }


//   const Main = () => (
//     <main>
//       <div className='main-wrapper'>
//         <p>Prerequisite before learning React.js</p>
//         <ul>
//           <Techlist />
//         </ul>
//         <Usercard />
//       </div>
//     </main>
//   )

//   const Footer = () => (
//     <footer>
//       <div className='footer-wrapper'>
//         <p>Copyright 2020</p>
//       </div>
//     </footer>
//   )

//   return (
//     <>
//       <div>I am a cricketer</div>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   )
// }

// export default App









// #1 
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import Profile from './components/Profile'
// function App() {

//   const Header = () =>(
//     <header>
//       <div className='header-wrapper'>
//       <h1>welcome to the react components</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>kapil dev </p>
//       <small>jul 20, 2025</small>
//       </div>
//     </header>
//   )

//   const Usercard = ()=>(
//     <div className='user-card'>
//     <img src="https://media.licdn.com/dms/image/v2/D4D03AQH5LPeOtmhr3g/profile-displayphoto-scale_400_400/B4DZfGZDTKGYAg-/0/1751380147137?e=1755734400&v=beta&t=GWzT_TFMlUki8gEYf7VQRA7m-MtNC0Jm6Oeva6gSxZU" alt="kapil" />
//     <h2>kapil dev </h2>
//     </div>
//   )

//   const Techlist = () =>(
//     const techs = ['html','css','js']
//     const techformatted = techs.map((techs)) => <li key={techs}>techs </li>
//     return techformatted
//   )

//   const Main = () =>(
//     <main>
//       <div className='main-wrapper'>
//         <p>prerequisite before learning react.js</p>
//         <ul>
//           <Techlist />
//         </ul>
//         <Usercard />


//       </div>
      
//     </main>
//   )

//   const Footer = () => (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright 2020</p>
//     </div>
//   </footer>
// )




//   return (


//     <>
//     <div>i am  a cricketer</div>
//     {/* <Profile/>
//     <Profile/>
//     <Profile/> */}

//     <Header/>
//     <Main />
//     <Footer />

//     </>
//   )
// }