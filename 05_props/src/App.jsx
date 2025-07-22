

import './App.css'

// ProfileCard Component
const ProfileCard = ({ name, bio, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} width="150" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  )
}

// App Component
function App() {
  const user = {
    name: 'Kapil Dev Chaudhary',
    bio: 'A passionate web developer learning React!',
    imageUrl: 'https://via.placeholder.com/150'
  }

  return (
    <div className="App">
      <h1>User Profile</h1>
      {/* Passing props to ProfileCard */}
      <ProfileCard 
        name={user.name} 
        bio={user.bio} 
        imageUrl={user.imageUrl} 
      />
    </div>
  )
}

export default App
// import './App.css';

// // Header component with props destructuring
// const Header = ({ data }) => {
//   const { title, subtitle, author, comment, date } = data;
//   const { firstName, lastName } = author;

//   return (
//     <header>
//       <h1>{title}</h1>
//       <h2>{subtitle}</h2>
//       <p>By: {firstName} {lastName}</p>
//       <p>{comment}</p>
//       <small>{date.toDateString()}</small>
//     </header>
//   );
// };



// // App Component
// function App() {
//   const data = {
//     title: 'Demon Slayer',
//     subtitle: 'Akaza Arc',
//     author: {
//       firstName: 'Kapil',
//       lastName: 'Dev'
//     },
//     comment: 'Best movie of all time!',
//     date: new Date()
//   };

//   return (
//     <div className="App">
//       <Header data={data} />
//     </div>
//   );
// }

// export default App;





























// everything applying in this code:
// import './App.css'

// const showDate = (time) => {
//   const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//   const month = months[time.getMonth()].slice(0, 3);
//   const year = time.getFullYear();
//   const date = time.getDate();
//   return `${month} ${date} ${year}`;
// }

// // Header Component
// const Header = ({
//   data: {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   },
// }) => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>{firstName} {lastName}</p>
//       <small>{showDate(date)}</small>
//     </div>
//   </header>
// );

// // TechList Component
// const TechList = ({ techs }) => {
//   const techlist = techs.map((tech) => <li key={tech}>{tech}</li>);
//   return <>{techlist}</>;
// };

// // UserCard Component
// const UserCard = ({ user: { firstName, lastName, image } }) => (
//   <div className='user-card'>
//     <img src={image} alt={firstName} />
//     <h2>{firstName} {lastName}</h2>
//   </div>
// );

// // Button Component
// const Button = ({ text, onclick, style }) => (
//   <button style={style} onClick={onclick}>{text}</button>
// );

// // CSS styles
// const buttonStyles = {
//   backgroundColor: '#61dbfb',
//   padding: 10,
//   border: 'none',
//   borderRadius: 5,
//   margin: 3,
//   cursor: 'pointer',
//   fontSize: 18,
//   color: 'white',
// };

// // Main Component
// const Main = ({ user, techs, greetPeople, handleTime }) => (
//   <main>
//     <div className='main-wrapper'>
//       <p>Prerequisite to get started react.js</p>
//       <ul>
//         <TechList techs={techs} />
//       </ul>
//       <UserCard user={user} />
//       <Button text="Greet People" onclick={greetPeople} style={buttonStyles} />
//       <Button text="Show Time" onclick={handleTime} style={buttonStyles} />
//     </div>
//   </main>
// );

// // Footer Component
// const Footer = ({ copyRight }) => (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright {copyRight.getFullYear()}</p>
//     </div>
//   </footer>
// );

// // App Component
// function App() {
//   const data = {  // the flow of code starts here
//     welcome: 'Welcome to 30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Kapil',
//       lastName: 'Dev',
//     },
//     date: new Date()
//   };

//   const date = new Date(); // for date
//   const techs = ['HTML', 'CSS', 'JavaScript']; // for techlist

//   const user = { // user info
//     ...data.author,
//     image: 'https://media.licdn.com/dms/image/v2/D4D03AQH5LPeOtmhr3g/profile-displayphoto-scale_400_400/B4DZfGZDTKGYAg-/0/1751380147137?e=1755734400&v=beta&t=GWzT_TFMlUki8gEYf7VQRA7m-MtNC0Jm6Oeva6gSxZU'
//   };

//   const handleTime = () => {  // for button
//     alert(showDate(new Date()));
//   };

//   const greetPeople = () => { // for button
//     alert('Welcome to 30 Days of React Challenge!');
//   };

//   return (
//     <>
//       <Header data={data} />
//       <Main user={user} techs={techs} handleTime={handleTime} greetPeople={greetPeople} />
//       <Footer copyRight={date} />
//     </>
//   );
// }

// export default App;























// import './App.css'

// const Header = (props) => {
//   const data = props.data
//   const { welcome, title, subtitle, author, date } = data
//   const { firstName, lastName } = author

//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>{firstName} {lastName}</p>
//         <small>{date.toDateString()}</small>
//       </div>
//     </header>
//   )
// }

// function App() {
//   const data = {
//     welcome: "welcome to the 30 days of js",
//     title: "Getting started",
//     subtitle: "js library",
//     author: {
//       firstName: "kapil",
//       lastName: "dev"
//     },
//     date: new Date()
//   }

//   return (
//     <>
//       <Header data={data} />
//     </>
//   )
// }

// export default App

















// // props to show alert as date
// import './App.css'

// const ShowDate = (time) =>{
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0,3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return `${month} ${date} ${year}`
// }



// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>





// function App() {

//   const handleTime = () =>{
//     alert(ShowDate(new Date()))
//   }
//   const greetPeople = () =>{
//     alert("welcome to the challenge")
//   }

  
 

//   return (
//     <>
//         <Button text="show time" onClick={handleTime} />
//         <Button text="Greet people" onClick={greetPeople} />
    

//     </>
//   )
// }

// export default App

















// props in function
// import './App.css'

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>




// function App() {

//   const sayHi= () =>{
//     alert("hi")
//   }

 

//   return (
//     <>

//     <Button text="say hi" onClick={sayHi} />
//     <Button text="show time" onClick={alert(new Date())} />

//     </>
//   )
// }

// export default App






















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
