import './App.css'
import React, { Component } from 'react'

// Data object
const data = {
  welcome: 'Welcome to 30 Days of React',
  title: 'Getting Started React',
  subtitle: 'JavaScript Library',
  author: {
    firstName: 'Kapil',
    lastName: 'Chaudhary',
  },
  date: new Date(),
}

// Image URL you provided
const user = {
  ...data.author,
  image: 'https://media.licdn.com/dms/image/v2/D4D03AQH5LPeOtmhr3g/profile-displayphoto-scale_400_400/B4DZfGZDTKGYAg-/0/1751380147137?e=1756339200&v=beta&t=N3bEthYYxNDEbGQAunwPX6_xIEH4D-ArEvuoX3ZYZyg',
}

// Format date
const showDate = (time) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const month = months[time.getMonth()]
  const year = time.getFullYear()
  const date = time.getDate()
  return `${month} ${date}, ${year}`
}

// Header Component
const Header = ({ data }) => {
  const { welcome, title, subtitle, author, date } = data
  const { firstName, lastName } = author
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{firstName} {lastName}</p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// UserCard Component
const UserCard = (props) => {
  const { firstName, lastName, image } = props.user
  return (
    <div className='user-card'>
      <img src={image} alt={`${firstName} ${lastName}`} />
      <h2>{firstName} {lastName}</h2>
    </div>
  )
}

// Main App class component
class App extends Component {
  state = {
    backgroundColor: 'lightblue',
  }

  render() {
    return (
      <div className='app'>
        <Header data={data} />
        <UserCard user={user} />
      </div>
    )
  }
}

export default App
