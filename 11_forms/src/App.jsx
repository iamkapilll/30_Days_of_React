import { useState } from 'react'

import './App.css'


function App() {
  // initial state using useState
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  });

  // Destructuring for easier access
  const { firstName, lastName, country, title } = formData; 

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // This is where you’d send data to backend
  };

  return (
    <div className='App'>
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='country'
            placeholder='Country'
            value={country}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-success'>Submit</button>
      </form>
    </div>
  );
}

export default App
