import React from 'react'
import Typed from 'react-typed'
const TypeWriter = () => {
  return (
    <div className='shadow-lg'>
<p className='text-3xl md:text-6xl text-black pb-3'>Hii,</p>
    <span className='text-3xl md:text-6xl border border-b-4 border-white bg-gray font-Inria'>I am </span>
    <Typed
    className='text-3xl md:text-6xl border border-b-4 text-white bg-gray font-Inria'
    strings={["Web Designer", "Web Developer","Front-End-Developer","React Js Developer"]}
    typeSpeed={50}
    backSpeed={60}
    loop
    />


 
 
</div>
  )
}

export default TypeWriter
