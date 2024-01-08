import React, { useState } from 'react'

const UserInput = ({input, setChange}) => {

  return (
    <div className=' md:w-[60%] md:mx-auto'>
      <div className='flex w-full   gap-5 mt-5 '>
       <div className='text-white  w-[50%]'>
        <label className='font-bold md:text-2xl'>Intial Investment</label>
        <input className=' w-[100%] outline-none rounded-lg bg-transparent border-2 py-1 px-2 text-blue-400'
         type='number'
         value={input.initialInvestment}
         onChange={(event) => setChange('initialInvestment',event.target.value)}
         />
       </div>
       <div className='text-white w-[50%]'>
        <label  className='font-bold md:text-2xl'>Annual Investment</label>
        <input className='w-[100%] outline-none rounded-lg bg-transparent border-2 py-1 px-2 text-blue-400'
         type='number'
         value={input.annualInvestment}
         onChange={(event) => setChange('annualInvestment',event.target.value)}/>
       </div>
      </div>
      <div className='flex w-full gap-5 mt-2  items-center'>
      <p className='text-white w-[50%]'>
        <label  className='font-bold md:text-2xl'>Expected Return</label>
        <input className='w-[100%] text-blue-400 outline-none rounded-lg bg-transparent border-2 py-1 px-2'
         type='number'
         value={input.expectedReturn}
         onChange={(event) => setChange('expectedReturn',event.target.value)}/>
       </p>
       <p className='text-white w-[50%]'>
        <label  className='font-bold md:text-2xl'>Duration</label>
        <input className='w-[100%] outline-none rounded-lg bg-transparent border-2 py-1 px-2 text-blue-400'
         type='number'
         value={input.duration}
         onChange={(event) => setChange('duration',event.target.value)}/>
       </p>
      </div>
    </div>
  )
}

export default UserInput