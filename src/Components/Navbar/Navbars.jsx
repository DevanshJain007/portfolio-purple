import React from 'react'

const Navbars = () => {
  return (
    <>
    <div className='flex justify-between bg-[#11071F] fixed items-center top-0 left-0 p-8 w-screen    justify-items-center   '>
      <div className='pl-20 font-light   '>LOGO</div>
      <div className='flex '>
        <ul className='flex gap-60 justify-around '>
          <li>HOME</li>
          <li>ABOUT</li>
          <li className='pr-10'>LAB</li>

        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbars