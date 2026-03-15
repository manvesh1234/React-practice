import React, { useState } from 'react'

const App = () => {

  const [marks, setMarks] = useState([45,78,29,12,15,53,86])

  function graceStudent () {
     const newMarks = marks.map(function (elem) {
      return elem + 5
    })
    setMarks(newMarks)
  }
  
  return (
    <div>
      {marks.map(function(elem,idx){
        return <h1 key={idx}>student {idx + 1} = {elem} ({elem>33?'PASS':'FAIL'})</h1>
      })}
      <button onClick={graceStudent} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Give Grace Marks
      </button>
    </div>
  )
}

export default App