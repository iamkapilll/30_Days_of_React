import React from 'react'
import ReactDOM from 'react-dom'

// UserCard Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={`${firstName} ${lastName}`} style={{ width: '150px', borderRadius: '10px' }} />
    <h2>{firstName} {lastName}</h2>
  </div>
)

// Header Component
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
      <header style={this.props.styles}>
        <div className='header-wrapper'>
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

// Message Component
const Message = ({ message }) => (
  <div>
    <h1>{message}</h1>
  </div>
)

// Login and Welcome components
const Login = () => <h3>Please Login</h3>
const Welcome = () => <h1>Welcome to 30 Days Of React</h1>

// Button Component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// TechList Component
class TechList extends React.Component {
  render() {
    const { techs } = this.props
    return techs.map((tech) => <li key={tech}>{tech}</li>)
  }
}

// Main Component
class Main extends React.Component {
  render() {
    const {
      techs,
      greetPeople,
      handleTime,
      loggedIn,
      handleLogin,
      message,
      user,
    } = this.props

    const status = loggedIn ? <Welcome /> : <Login />

    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started with React.js:</p>
          <ul><TechList techs={techs} /></ul>
          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started with React</p>
          )}
          <UserCard user={user} />
          <div>
            <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
            <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
            {!loggedIn && <p>Please login to access more information about the challenge</p>}
          </div>
          <div style={{ margin: 30 }}>
            <Button text={loggedIn ? 'Logout' : 'Login'} style={buttonStyles} onClick={handleLogin} />
            {status}
          </div>
          <Message message={message} />
        </div>
      </main>
    )
  }
}

// Button styles
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// Footer Component
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

// Main App Component
class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JS'],
    message: 'Click show time or greet people to change me',
  }

  handleLogin = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  showDate = (time) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${months[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`
  }

  handleTime = () => {
    this.setState({ message: this.showDate(new Date()) })
  }

  greetPeople = () => {
    this.setState({ message: 'Welcome to 30 Days Of React Challenge, 2020' })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    const user = {
      firstName: 'Kapil',
      lastName: 'Chaudhary',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQH5LPeOtmhr3g/profile-displayphoto-scale_400_400/B4DZfGZDTKGYAg-/0/1751380147137?e=1756339200&v=beta&t=N3bEthYYxNDEbGQAunwPX6_xIEH4D-ArEvuoX3ZYZyg',
    }

    return (
      <div className='app'>
        <Header data={data} />
        <Main
          techs={this.state.techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
          user={user}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}

export default App
