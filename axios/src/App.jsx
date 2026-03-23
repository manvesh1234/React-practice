import React, { useState } from 'react'
import axios from 'axios'
import User from './components/User'

const App = () => {

  const [allData, setAllData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    setAllData(response.data)
 }


  return (
    <div className='min-h-screen bg-zinc-900'>
      <button onClick={getData} className='bg-blue-400 py-2 px-10 m-7 text-sm'>Get data</button>

      <div className='flex flex-wrap'>
        {allData.map(function(elem,idx) {
        
        return <div key={idx}>
          <User elem={elem} />
        </div>
      })}
      </div>
    </div>
  )
}

export default App