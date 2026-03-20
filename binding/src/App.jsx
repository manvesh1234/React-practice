import React, { useState } from 'react'

const App = () => {

const [title, setTitle] = useState('')

const [allUsers, setallUsers] = useState([])

const Handler = (e) => {
    e.preventDefault()

    const newAllUsers = [...allUsers]
    newAllUsers.push(title)

    console.log(newAllUsers);

    setallUsers(newAllUsers)

    setTitle('')
}

 

  return (
    <div>
        <form onSubmit={Handler}>
            <input type="text" placeholder='Enter name' value={title}className='border m-4 px-4 py-2 'onChange={(e) => {
              setTitle(e.target.value);
            }} />
            
            <button className='border bg-green-500 rounded px-4 py-2'>Submit</button>
        </form>

        {allUsers.map( (elem,idx) => {

          return <h4 key={idx}>{elem}</h4>
         })}
    </div>
  )
}

export default App