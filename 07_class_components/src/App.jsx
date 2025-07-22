import React from "react"

class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{firstName} {lastName}</p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
        </div>
      </main>
    )
  }
}

// ✅ Only keep this Footer
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: 'Oct 6, 2020',
  }

  const techs = ['HTML', 'CSS', 'JavaScript']

  return (
    <div className='app'>
      <Header data={data} />
      <Main techs={techs} />
      <Footer date={new Date()} />
    </div>
  )
}

export default App

























// //#### everything is same in both of the components thatis  FUNCTIONAL COMPONENTS AND CLASS COMPONENTS
// // import './App.css'
// // TechList Component
// // functional component

// import React from "react"

// // const TechList = () => {
// //   const techs = ['HTML', 'CSS', 'JavaScript']
// //   const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
// //   return techsFormatted
// // }

// // TechList Component
// // class base component

// class TechList extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const techs = ['HTML', 'CSS', 'JavaScript']
//     const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//     return techsFormatted
//   }
// }



// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     // the code inside the constructor run before any other code
//   }
//   render() {
//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>Welcome to 30 Days Of React</h1>
//           <h2>Getting Started React</h2>
//           <h3>JavaScript Library</h3>
//           <p>Asabeneh Yetayeh</p>
//           <small>Oct 7, 2020</small>
//         </div>
//       </header>
//     )
//   }
// }

// // Main Component
// // Functional Component

// // const Main = () => (
// //   <main>
// //     <div className='main-wrapper'>
// //       <p>Prerequisite to get started react.js:</p>
// //       <ul>
// //         <TechList />
// //       </ul>
// //     </div>
// //   </main>
// // )

// // Main Component
// // Class Component
// class Main extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <main>
//         <div className='main-wrapper'>
//           <p>Prerequisite to get started react.js:</p>
//           <ul>
//             <TechList />
//           </ul>
//         </div>
//       </main>
//     )
//   }
// }


// // Footer Component
// // Functional component
// // const Footer = () => (
// //   <footer>
// //     <div className='footer-wrapper'>
// //       <p>Copyright 2020</p>
// //     </div>
// //   </footer>
// // )

// // Footer Component
// // Class component
// class Footer extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <footer>
//         <div className='footer-wrapper'>
//           <p>Copyright 2020</p>
//         </div>
//       </footer>
//     )
//   }
// }



// // The App, or the parent or the container component
// // Functional Component
// // const App = () => (
// //   <div className='app'>
// //     <Header />
// //     <Main />
// //     <Footer />
// //   </div>
// // )


// // The App, or the parent or the container component
// // Class Component
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div className='app'>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     )
//   }
// }


// export default App
