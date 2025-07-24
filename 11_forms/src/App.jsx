import React, { useState } from 'react'

function App() {
  const [name, setName] = useState('')

  const handleChange =(e) =>{
    setName(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert(`the name you entered is : ${name}`)

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name:</label>
          <input type="text" name="name" id="name" value={name} onChange={handleChange} />
      </form>
    </div>
  )
}

export default App










// import React, { useState } from 'react'

// function App() {
//   const [name, setName] = useState('')

// const handleChange = (e) =>{
//   setName(e.target.value)
//   console.log(setName)

// }

//   return (
//     <div>
//       <form>
//         <label htmlFor="name">enter your name:</label>
//         <input
//          type="text" 
//          value={name}
//          name="name" 
//          id="name"
//          onChange={handleChange} />
//          <button type='submit'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// function App() {


//   return (
//     <div>
//       <form>
//         <label htmlFor="input">enter your name:</label>
//         <input type="text" />
//       </form>
//     </div>
//   )
// }

// export default App
































// import { useState } from 'react'

// import './App.css'

// const options = [
//   { value: '', label: '-- Select Country--' },
//   { value: 'Finland', label: 'Finland' },
//   { value: 'Sweden', label: 'Sweden' },
//   { value: 'Norway', label: 'Norway' },
//   { value: 'Denmark', label: 'Denmark' },
// ];

// const selectOptions = options.map(({ value, label }) => (
//   <option key={value} value={value}>{label}</option>
// ));

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     tel: '',
//     dateOfBirth: '',
//     favoriteColor: '',
//     weight: '',
//     country: '',
//     gender: '',
//     bio: '',
//     file: '',
//     skills: {
//       html: false,
//       css: false,
//       javascript: false,
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;

//     if (type === 'checkbox') {
//       setFormData((prev) => ({
//         ...prev,
//         skills: { ...prev.skills, [name]: checked },
//       }));
//     } else if (type === 'file') {
//       setFormData((prev) => ({ ...prev, [name]: files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { skills, ...rest } = formData;
//     const formattedSkills = Object.keys(skills).filter((skill) => skills[skill]);

//     const submittedData = {
//       ...rest,
//       skills: formattedSkills.map((skill) => skill.toUpperCase()),
//     };

//     console.log(submittedData);
//     // This is where you would send `submittedData` to your backend API
//   };

//   const {
//     firstName, lastName, email, tel, dateOfBirth,
//     favoriteColor, weight, country, gender, bio,
//   } = formData;

//   return (
//     <div className='App'>
//       <h3>Add Student</h3>
//       <form onSubmit={handleSubmit}>
//         {/* First Row */}
//         <div className='row'>
//           <div className='form-group'>
//             <label>First Name</label>
//             <input
//               type='text'
//               name='firstName'
//               value={firstName}
//               onChange={handleChange}
//               placeholder='First Name'
//             />
//           </div>
//           <div className='form-group'>
//             <label>Last Name</label>
//             <input
//               type='text'
//               name='lastName'
//               value={lastName}
//               onChange={handleChange}
//               placeholder='Last Name'
//             />
//           </div>
//           <div className='form-group'>
//             <label>Email</label>
//             <input
//               type='email'
//               name='email'
//               value={email}
//               onChange={handleChange}
//               placeholder='Email'
//             />
//           </div>
//         </div>

//         {/* Other Fields */}
//         <div className='form-group'>
//           <label>Telephone</label>
//           <input type='tel' name='tel' value={tel} onChange={handleChange} placeholder='Tel' />
//         </div>
//         <div className='form-group'>
//           <label>Date of Birth</label>
//           <input type='date' name='dateOfBirth' value={dateOfBirth} onChange={handleChange} />
//         </div>
//         <div className='form-group'>
//           <label>Favorite Color</label>
//           <input type='color' name='favoriteColor' value={favoriteColor} onChange={handleChange} />
//         </div>
//         <div className='form-group'>
//           <label>Weight</label>
//           <input type='number' name='weight' value={weight} onChange={handleChange} placeholder='Kg' />
//         </div>
//         <div className='form-group'>
//           <label>Country</label><br />
//           <select name='country' value={country} onChange={handleChange}>
//             {selectOptions}
//           </select>
//         </div>

//         {/* Gender */}
//         <div>
//           <p>Gender</p>
//           {['Female', 'Male', 'Other'].map((g) => (
//             <div key={g}>
//               <input
//                 type='radio'
//                 id={g.toLowerCase()}
//                 name='gender'
//                 value={g}
//                 checked={gender === g}
//                 onChange={handleChange}
//               />
//               <label htmlFor={g.toLowerCase()}>{g}</label>
//             </div>
//           ))}
//         </div>

//         {/* Skills */}
//         <div>
//           <p>Select your skills</p>
//           {['html', 'css', 'javascript'].map((skill) => (
//             <div key={skill}>
//               <input
//                 type='checkbox'
//                 id={skill}
//                 name={skill}
//                 onChange={handleChange}
//               />
//               <label htmlFor={skill}>{skill.toUpperCase()}</label>
//             </div>
//           ))}
//         </div>

//         {/* Bio */}
//         <div>
//           <label>Bio</label><br />
//           <textarea
//             name='bio'
//             value={bio}
//             onChange={handleChange}
//             cols='120'
//             rows='10'
//             placeholder='Write about yourself ...'
//           />
//         </div>

//         {/* File Upload */}
//         <div>
//           <input type='file' name='file' onChange={handleChange} />
//         </div>

//         <div>
//           <button type='submit'>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }


// export default App








// import { useState } from 'react'

// import './App.css'


// function App() {
//   // initial state using useState
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     country: '',
//     title: '',
//   });

//   // Destructuring for easier access
//   const { firstName, lastName, country, title } = formData; 

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // This is where you’d send data to backend
//   };

//   return (
//     <div className='App'>
//       <h3>Add Student</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type='text'
//             name='firstName'
//             placeholder='First Name'
//             value={firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type='text'
//             name='lastName'
//             placeholder='Last Name'
//             value={lastName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type='text'
//             name='country'
//             placeholder='Country'
//             value={country}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type='text'
//             name='title'
//             placeholder='Title'
//             value={title}
//             onChange={handleChange}
//           />
//         </div>
//         <button className='btn btn-success'>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App
