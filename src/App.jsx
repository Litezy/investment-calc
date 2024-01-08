import React, { useState } from 'react'
import Header from '../src/components/Header'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'

const App = () => {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 500,
    expectedReturn: 100,
    duration: 10
  })

   const checkDuration = inputs.duration >=1
  const handleChange = (identifier, newValue) => {
    setInputs({
      ...inputs,
      [identifier]: + newValue
    })
  }
    return (
      <div>
        <Header />
       <div className="w-full bg-t  pb-4">
       <div className="w-[90%] flex items-center  mx-auto">
          <UserInput input={inputs} setChange={handleChange} />
        </div>
       </div>
       {checkDuration ? <Results input={inputs}/> : <p className='text-white text-center'>Pls input a valid duration</p>}
      </div>
    )
  }

  export default App