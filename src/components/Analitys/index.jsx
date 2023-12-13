import React from 'react'
import Laptop from '../../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 h-full lg:h-auto'>
        <div className='grid md:grid-cols-2 items-center max-w-[1024px] mx-auto'>
            <img className='w-[500px] py-4' src={Laptop} alt="Laptop" />
            <div className='flex flex-col justify-center'>
              <p className='text-[#0021df] font-bold'>DATA ANALYTICS DASHBOARD</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, doloribus voluptate. Explicabo, eligendi velit! Corrupti excepturi et sint est necessitatibus.</p>
              <button className='text-[#0021df] bg-black py-3 rounded-md w-[150px] mx-auto my-4 md:mx-0 font-medium'>Get Start</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics