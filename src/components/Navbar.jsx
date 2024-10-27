import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-900 text-white px-8 py-2'>
        <div className="logo">
            <span className="font-bold text-xl">iTask</span>
        </div>
        {/* <ul className="flex gap-20">
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Your Tasks</li>
        </ul> */}
    </nav>
  )
}

export default Navbar   