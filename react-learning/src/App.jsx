import React, { useState } from 'react'
import Men from './components/Men'
import Women from './Women'

const App = () => {

  const [gender, setGender] = useState('Male')

  const changeGender = () => {
   setGender(gender === "Male" ? "Female" : "Male")
  }

  return (
    <div className='p-5 bg-black min-h-screen text-white'>
      <h1 className="text-3xl">{gender}</h1>
      <br />
       <button onClick={changeGender} className="bg-green-500 text-white px-4 py-2 rounded">
        Change Gender
       </button>

       {gender === 'Male'? <Men /> : <Women />}
    </div>
  )
}

export default App