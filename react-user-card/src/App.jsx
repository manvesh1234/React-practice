import React, { useState } from 'react'

const App = () => {

  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userDesc, setUserDesc] = useState('')
  const [allUsers, setAllUsers] = useState([])

  const Handler = (e) => {
    e.preventDefault()

    const newUser = {
      userName,
      userRole,
      imageURL,
      userDesc
    }

    setAllUsers([...allUsers, newUser])

    // Clear inputs
    setUserName('')
    setUserRole('')
    setImageURL('')
    setUserDesc('')
  }

  const deleteUser = (index) => {
    const updatedUsers = allUsers.filter((_, i) => i !== index)
    setAllUsers(updatedUsers)
  }

  return (
    <div className='min-h-screen bg-black text-white'>
      
      {/* FORM */}
      <form onSubmit={Handler} className='flex flex-wrap'>

        <input 
          value={userName}
          onChange={(e)=> setUserName(e.target.value)}
          className='border-2 font-semibold text-xl px-5 rounded m-2 lg:w-[48%]' 
          type="text" 
          placeholder='Enter your Name'
        />

        <input
          value={imageURL}
          onChange={(e)=> setImageURL(e.target.value)}
          className='border-2 font-semibold text-xl px-5 rounded m-2 lg:w-[48%]' 
          type="text" 
          placeholder='Enter Image URL'
        />

        <input 
          value={userRole}
          onChange={(e)=> setUserRole(e.target.value)}
          className='border-2 font-semibold text-xl px-5 rounded m-2 lg:w-[48%]' 
          type="text" 
          placeholder='Enter role'
        />

        <input
          value={userDesc}
          onChange={(e)=> setUserDesc(e.target.value)}
          className='border-2 font-semibold text-xl px-5 rounded m-2 lg:w-[48%]' 
          type="text" 
          placeholder='Enter Description'
        />

        <button
          className='border-2 font-semibold text-xl active:scale-95 cursor-pointer px-5 py-2 rounded m-2 w-[97%] bg-emerald-700'>
          Create User
        </button>

      </form>

      {/* CARDS */}
      <div className='flex flex-wrap px-4 py-10 gap-10'>

        {allUsers.map((elem, idx) => (
          <div key={idx} className='w-[22vw] md:w-[30vw] sm:w-[45vw] h-80 rounded-xl text-center py-5 px-5 flex flex-col items-center bg-white text-black'>

            <img 
              className='h-24 w-24 rounded-full object-cover'
              src={elem.imageURL} 
              alt="user"
            />

            <h1 className='text-xl font-semibold mt-2'>
              {elem.userName}
            </h1>

            <h5 className='text-blue-500 text-lg font-semibold my-2'>
              {elem.userRole}
            </h5>

            <p className='text-sm font-medium'>
              {elem.userDesc}
            </p>

            <button 
              onClick={() => deleteUser(idx)}
              className='mt-3 px-4 py-2 rounded text-xs cursor-pointer active:scale-95 bg-red-500 text-white font-semibold'>
              Remove
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default App